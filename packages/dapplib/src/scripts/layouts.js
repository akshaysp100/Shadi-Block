const BufferLayout = require('buffer-layout');
const borsh = require("borsh")

module.exports = class DataLayouts {

    static get() {
        let dataLayouts = [];

        /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: HELLO DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
        let groom = BufferLayout.cstr("groom");
        let bride = BufferLayout.cstr("bride");
        let date = BufferLayout.cstr("date");
        let place = BufferLayout.cstr("place");
        /*
        const ds = BufferLayout.struct([BufferLayout.seq(BufferLayout.u8(), 2),groom, BufferLayout.seq(BufferLayout.u8(), 2),
            BufferLayout.seq(BufferLayout.u8(), 2),bride, BufferLayout.seq(BufferLayout.u8(), 2),
            date, BufferLayout.seq(BufferLayout.u8(), 2),
            place, BufferLayout.seq(BufferLayout.u8(), 2)], "LoveRecord");*/
        const ds = BufferLayout.struct([BufferLayout.blob(16,"groom"),BufferLayout.blob(16,"bride"),BufferLayout.blob(10,"date"),BufferLayout.blob(16,"place")],"LoveRecord");
        //const ds = BufferLayout.struct([BufferLayout.seq(BufferLayout.u8(), 6),groom,BufferLayout.seq(BufferLayout.u8(), 2),bride,BufferLayout.seq(BufferLayout.u8(), 2),date,BufferLayout.seq(BufferLayout.u8(), 2),place,BufferLayout.seq(BufferLayout.u8(), 2)])
        dataLayouts.push({
            name: 'greeting',
            layout: BufferLayout.seq(ds, 15)
        }
        );

        return dataLayouts;
    }
}