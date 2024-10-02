# Decentralized Image Upload and Sharing
## Creating A Decentralized Image Upload and Sharing Through IPFS Network.
This project facilitates decentralized image upload and sharing on the blockchain using Solidity for the smart contract and React for the front-end interface. It enables users to securely upload images to IPFS (InterPlanetary File System) and share access with specified users through smart contract functionality.

## Table of Contents

1. [Introduction](#creating-a-decentralized-image-upload-and-sharing-through-ipfs-network)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
   - [Set up environment variable](#set-up-environment-variables)
   - [Installation & Configuration](#Installation-And-Configuration)
5. [Other Important Steps](#Other-Important-Steps)
5. [Contact](#for-questions-reach-out-to-shettyshravan871gmailcom)

## Features

- **Decentralized Storage:** Images are uploaded to IPFS, ensuring decentralized and immutable storage.
- **Smart Contract:** Utilizes Solidity smart contracts on the Ethereum blockchain for access control and ownership management.
- **Access Control:** Users can grant or revoke access to their uploaded images to specific individuals through the smart contract.

## Technologies Used

- **Solidity:** Smart contract development for ownership and access control.
- **React:** Front-end interface for uploading images and managing access.
- **IPFS:** Decentralized storage protocol for hosting uploaded images.
- **Metamask:** Cryptocurrency wallet used to interact with the Ethereum blockchain.

## Usage

### Set up environment variables:

   - Obtain API keys for Pinata to interact with IPFS.
   - Update the React component [`FileUpload.js`](https://github.com/Shravan-871/Decentralized-File-Sharing/blob/fab3f24549051821117acc4043e5d61d19ab4f4e/client/src/components/FileUpload.js#L19) with your Pinata API keys.

### Installation And Configuration

1. **Install Metamask:**
   - Ensure Metamask is installed and configured in your browser for Ethereum interactions.

2. **Clone the repository:**

   ```bash
   git clone https://github.com/Shravan-871/Decentralized-File-Sharing.git
   ```
3. Install dependencies for the hardhat:

   ```bash
   # Navigate to the root directory
   cd Decentralized-File-Sharing
   # Install hardhat dependencies
   npm install
   ```
4. Compile the smart contract for artifacts in Terminal 01:

   ```bash
   # Compile Smart Contract
   npx hardhat compile
   ```
5. Deploy the Solidity smart contract to an Ethereum testnet or local development environment in terminal 02.
   ```bash
   # Deploy Smart Contract : (network-name = localhost)
   npx hardhat run scripts/deploy.js --network <network-name>
   ```
6. Install dependencies for the React front end in terminal 3:
   ```bash
   # Navigate to the React client directory
   cd client 
   # Install React dependencies
   npm install
   ```
7. Run the react application:
   ```bash
   # Start React Application
   npm start
   ```
8. **Update Contract Address:**
   - After smart contract deployment, make sure to update the contract address in [`App.js`](https://github.com/Shravan-871/Decentralized-File-Sharing/blob/68cadcdcf29dce418420e9cb88e7b0c6f3201aad/client/src/App.js#L31) within the React application. For Localhost it will be "0x5FbDB2315678afecb367f032d93F642f64180aa3"

9. **Upload Image before "Get Data":**
   - Click "Get Data" only after uploading an image on Pinata. Otherwise, it will throw an error stating "You don't have access".

10. **Accessing Other User Images:**
    - Use the "Get Data" button to access other users' images. Input the user's address in the designated box, but remember, you can only access their images if they've granted you access through the smart contract. Otherwise, it will throw an error saying "You don't have access".

These steps will ensure smooth navigation and utilization of the system while maintaining access control and avoiding potential errors.

----
For questions, reach out to shettyshravan871@gmail.com