import React, { Component } from 'react';
import ipfs from "./ipfs";
import getWeb3 from "../../../utils/getWeb3";
import RegistrationAndCertificateContractFactory from "../../../contracts/RegistrationAndCertificateContractFactory.json";
class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ipfsHash: "",
            web3: null,
            buffer: null,
            account: null
        };
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = RegistrationAndCertificateContractFactory.networks[networkId];
            const instance = new web3.eth.Contract(
                RegistrationAndCertificateContractFactory.abi,
                deployedNetwork && deployedNetwork.address
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance }, this.runExample);
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(error);
        }
    };

    captureFile(event) {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) });
            console.log("buffer", this.state.buffer);
        };
    }

    issueCertificate = event => {
        event.preventDefault();
        const { accounts, contract } = this.state;

        contract.methods
            .issueCertification(accounts[0])
            .send({ from: accounts[1], gas: 330000 })
            .then(function (result) {
                console.log(result);
                window.confirm("You have successfully uploaded the Certificate");
            })
            .catch(function (e) {
                console.log(e);
            });
    };

    onSubmit(event) {
        event.preventDefault();
        ipfs.add(this.state.buffer, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }
            this.setState({ ipfsHash: result[0].hash });
            console.log("ipfsHash", this.state.ipfsHash);
        });
    }
    render() {
        return (
            <div>
                <h2>Upload Certificate</h2>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input type="file" className="form-control col-sm-4" onChange={this.captureFile} />
                        <button onClick={this.issueCertificate}> Upload Certificate </button>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 ">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.handleView}
                            >
                                View Certificate
                            </button>
                            <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
                            <img
                                src={`http://127.0.0.1:8080/ipfs/${this.state.ipfsHash}`}
                                alt="Image Loads Here"
                            />
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}

export default Upload;