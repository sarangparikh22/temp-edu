import Web3 from "web3";
import getWeb3 from "./getWeb3";
import RegistrationAndCertificateContractFactory from "../contracts/RegistrationAndCertificateContractFactory.json";


const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const contractAddress = '0xE527345B8ba8aCa4440EE3723c6A61ad1C087d66';
const abi = RegistrationAndCertificateContractFactory.abi;


export default new web3.eth.Contract(abi, contractAddress);



//const address = '0xE527345B8ba8aCa4440EE3723c6A61ad1C087d66';
//const abi = RegistrationAndCertificateContractFactory.abi;
//const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
//const web3 = getWeb3();

//const networkId = web3.eth.net.getId();
//const deployedNetwork =
//   RegistrationAndCertificateContractFactory.networks[networkId];
//const instanceC = new web3.eth.Contract(
//   RegistrationAndCertificateContractFactory.abi,
//  deployedNetwork && deployedNetwork.address
//);



//const instanceC = new web3.eth.contract(abi).at(address);

//export { instanceC };



// Get network provider and web3 instance.
// const web3 = getWeb3().then(function () {
//     console.log("web 3 called");
//     let accounts = web3.eth.getAccounts().then(function () {
//         console.log("Accounts called");
//     });
// });


// Use web3 to get the user's accounts.

//var accounts = web3.eth.getAccounts();

// Get the contract instance.
// let networkId = web3.eth.net.getId();
// let deployedNetwork =
//     RegistrationAndCertificateContractFactory.networks[networkId];
// let contractInstance = new web3.eth.Contract(
//     RegistrationAndCertificateContractFactory.abi,
//     deployedNetwork && deployedNetwork.address
// );



//export { contractInstance, accounts };

// const getInstance = async () => {

//     const a = 50;
//     try {
//         // Get network provider and web3 instance.
//         const web3 = await getWeb3();

//         // Use web3 to get the user's accounts.
//         const accounts = await web3.eth.getAccounts();

//         // Get the contract instance.
//         const networkId = await web3.eth.net.getId();
//         const deployedNetwork = RegistrationAndCertificateContractFactory.networks[networkId];
//         const instance = new web3.eth.Contract(
//             RegistrationAndCertificateContractFactory.abi,
//             deployedNetwork && deployedNetwork.address
//         );

//         const a = "50";

//         // Set web3, accounts, and contract to the state, and then proceed with an
//         // example of interacting with the contract's methods.
//         //this.setState({ web3, accounts, contract: instance }, this.runExample);
//     } catch (error) {
//         // Catch any errors for any of the above operations.
//         alert(
//             `Failed to load web3, accounts, or contract. Check console for details.`
//         );
//         console.error(error);
//     }
// };

// //export default getInstance;
// export default getInstance