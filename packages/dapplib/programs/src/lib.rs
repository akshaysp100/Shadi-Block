use borsh::{ BorshDeserialize, BorshSerialize };
use solana_program::{
    log::sol_log_compute_units,
    account_info::{ next_account_info, AccountInfo },
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};
use std::io::ErrorKind::InvalidData;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct LoveRecord {
    pub groom: String,
    pub bride: String,
    pub date: String,
    pub place: String
}

// example arweave tx (length 43)
// 1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY
// ReUohI9tEmXQ6EN9H9IkRjY9bSdgql_OdLUCOeMEte0
const DUMMY_TX_ID: &str = "aaaaaaaaaaaaaaaa";
const DUMMY_CREATED_ON: &str = "0000000000000000"; // milliseconds, 16 digits
const DUMMY_DATE: &str = "00-00-0000";
const DUMMY_PLACE: &str = "aaaaaaaaaaaaaaaa";
pub fn get_init_love_record() -> LoveRecord {
    LoveRecord{ groom: String::from(DUMMY_TX_ID), bride: String::from(DUMMY_CREATED_ON), date: String::from(DUMMY_DATE), place: String::from(DUMMY_PLACE) }
}
pub fn get_init_love_records() -> Vec<LoveRecord> {
    let mut records = Vec::new();
    for _ in 0..15 {
        records.push(get_init_love_record());
    }
    return records;
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let account = next_account_info(accounts_iter)?;
    if account.owner != program_id {
        msg!("This account {} is not owned by this program {} and cannot be updated!", account.key, program_id);
    }

    sol_log_compute_units();


    let instruction_data_message = LoveRecord::try_from_slice(instruction_data).map_err(|err| {
        msg!("Attempt to deserialize instruction data has failed. {:?}", err);
        ProgramError::InvalidInstructionData
    })?;
    msg!("Instruction_data message object ...ASP {:?}", instruction_data_message);

    let mut existing_data_messages = match <Vec<LoveRecord>>::try_from_slice(&account.data.borrow_mut()){
        Err(err) => {
            if err.kind() == InvalidData {
                msg!("InvalidData so initializing account data");
                get_init_love_records()
            } else {
                panic!("Unknown error decoding account data {:?}", err)
            }
        },
        Ok(data) => data
    };

    let index = existing_data_messages.iter().position(|p| p.groom == String::from(DUMMY_TX_ID)).unwrap(); // find first dummy data entry
    msg!("Found index {}", index);
    existing_data_messages[index].groom = instruction_data_message.groom;
    existing_data_messages[index].bride = instruction_data_message.bride;
    existing_data_messages[index].date = instruction_data_message.date;
    existing_data_messages[index].place = instruction_data_message.place;
    // set dummy data to new entry
    let updated_data = existing_data_messages.try_to_vec().unwrap(); // set records object back to vector data
    msg!("Final existing_data_messages[index] {:?}", existing_data_messages[index]);
    //msg!("{:?}",updated_data);

    // data algorithm for storing data into account and then archiving into Arweave
    // 1. Each LoveRecord object will be prepopulated for txt field having 43 characters (length of a arweave tx).
    // Each LoveRecordContainer will be prepopulated with 10 LoveRecord objects with dummy data.
    // 2. Client will submit an arweave tx for each message; get back the tx id; and submit it to our program.
    // 3. This tx id will be saved to the Solana program and be used for querying back to arweave to get actual data.
    
    let data = &mut &mut account.data.borrow_mut();
    msg!("Attempting save data.");
    data[..updated_data.len()].copy_from_slice(&updated_data);
    let saved_data = <Vec<LoveRecord>>::try_from_slice(&data)?;
    msg!("LoveRecord has been saved to account data. {:?}", saved_data[index]); 
    //sol_log_compute_units();

    msg!("End program.");
    Ok(())
}

// Sanity tests
#[cfg(test)]
mod test {
    use super::*;
    use solana_program::clock::Epoch;
    //use std::mem;

    #[test]
    fn test_sanity() {
        let program_id = Pubkey::default();
        let key = Pubkey::default();
        let mut lamports = 0;
        let records = get_init_love_records();
        let mut data = records.try_to_vec().unwrap();
        let owner = Pubkey::default();
        let account = AccountInfo::new(
            &key,
            false,
            true,
            &mut lamports,
            &mut data,
            &owner,
            false,
            Epoch::default(),
        );
        
        let groom = "aaaaaaaaaaaaaaa1";
        let bride = "0000000000000003";
        let date = "00-00-2021";
        let place = "aaaaaaaaaaaaaaa2";
        let instruction_data_chat_message = LoveRecord{ groom: String::from(groom), bride: String::from(bride), date: String::from(date),place:String::from(place) };
        msg!("instruction_data_chat_message {:?}",instruction_data_chat_message);
        let instruction_data = instruction_data_chat_message.try_to_vec().unwrap();
        msg!("instruction_data {:?}",instruction_data);

        let accounts = vec![account];

        process_instruction(&program_id, &accounts, &instruction_data).unwrap();
        let chat_messages = &<Vec<LoveRecord>>::try_from_slice(&accounts[0].data.borrow())
        .unwrap()[0];
        let test_groom = &chat_messages.groom;
        let test_created_on = &chat_messages.bride;
        println!("chat message {:?}", &chat_messages);
        // I added first data and expect it to contain the given data
        assert_eq!(
            String::from(groom).eq(test_groom),
            true
        );
        assert_eq!(
            String::from(bride).eq(test_created_on),
            true
        );
    }
}