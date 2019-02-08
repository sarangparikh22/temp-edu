import React, { Component } from 'react';
import ipfs from "./ipfs";
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
                        <button> Upload Certificate </button>
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