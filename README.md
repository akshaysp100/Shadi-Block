![S](https://user-images.githubusercontent.com/42371812/132136560-5988672f-648b-4640-9b35-8820adf0b4d9.png)

ShadiBlock - A One-Stop Destination for Couples to Carve their Names permanently on the Fastest Blockchain Solana

Couples can use it to register their names as a memorable milestone on the blockchain permanently. It gives people a break who were carving their names on some trees or benches which was neither significant nor permanent. After registering they even get a certificate with their names, transaction hash, a link to their transaction, the place they met, and the date they started out. People can just plug in their details and get a clean certificate with their data stored permanently on the blockchain which can be visited by the link provided in the certificate. It makes the present task of carving names in public places much easier and memorable as the names registered on the blockchain are digital, permanent, and tamper-free(immutable) by others. The Solana blockchain comes with in-built features like safety, fast and affordable. ShadiBlock leverages these features and makes carving the names of couples on Blockchain Fast, Affordable, Permanent, Immutable, and ...Coool.

Important:
1. You need to have rust, solana-cli and npm to run this properly
2. It runs properly in any Linus like operating system - preferred os -> Ubuntu
3. You need to change to the specific shadiblock directory after cloning or downloading the project
4. Then run 'yarn' command to install all the dependencies
5. Then run 'yarn start' to compile the project (takes a bit a time first time)
6. Then shift to http://localhost:5001 to see the client view of the project

![Screenshot from 2021-09-04 12-36-16](https://user-images.githubusercontent.com/42371812/132136643-28b81070-b717-4eb3-a362-3a62da3fc1eb.png)


File Structure:
1. All the Client files or Frontend files are stored in packages/client folder
2. All the Backend files are stored in packages/dapplib folder
3. In the packages/dapplib folder all the rust related program files are stored in packages/dapplib/programs folder
4. In the packages/dapplib folder all the backend related funtions are stored dapp-lib.js with helper functions stored in blockchain.js and solana.js
5. In the packages/dapplib folder scripts folder contains scripts deploy.js for deploying the rust program to solana blockchain and layout.js for initializing the data structure of the program with some default data
6. In the packages/client folder all the react components and classes are in src folder

We have used Borsh to serialize and deserialize data in frontend, backend and rust program.
To access the website you need to run yarn in the folder that contains all the shadiblock files to install all the dependencies
And then run yarn start command to view the web app in the browser
Then go to localhost:5001 in the browser to view the website
