import React, { Component } from "react";
import getWeb3 from "../../../../utils/getWeb3";
import "./contractInteraction";
import RegistrationAndCertificateContractFactory from "../../../../contracts/RegistrationAndCertificateContractFactory.json";
class StartCert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
      instance: null,
    };
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

  acceptRegsitration = event => {
    event.preventDefault();
    const { accounts, contract } = this.state;

    contract.methods
      .acceptRegistration(accounts[1])
      .send({ from: accounts[0], gas: 330000 })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  startCertification = event => {
    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .startCertification(accounts[1])
      .send({ from: accounts[0], gas: 1330000 })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  requestCertification = event => {
    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .reqCertification(accounts[1])
      .send({ from: accounts[0], gas: 330000 })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  acceptCertification = event => {
    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .acceptCertification(accounts[1])
      .send({ from: accounts[0], gas: 330000 })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <div className="modal-1">
          <button type="button" className="btn btn-info btn-lg" onClick={this.acceptRegsitration}>Accept Registration</button>
          &nbsp; &nbsp;
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal1">Start Certification</button>
          &nbsp; &nbsp;
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal2">Request Certification</button>
          &nbsp; &nbsp;
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal3">Accept Certification</button>
          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Start Certification Form</h4>
                </div>
                <div className="modal-body">
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Enter College Name:</label> &nbsp;
                    <input type="text" className="form-control" />
                    </div>

                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.startCertification}>Submit</button>
                </div>
              </div>
            </div>
          </div>


          <div className="modal fade" id="myModal2" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Request Certification Form</h4>
                </div>
                <div className="modal-body">
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Enter College Name:</label> &nbsp;
                    <input type="text" className="form-control" />
                    </div>
                    <br>
                    </br>
                    <br></br>
                    <div className="form-group">
                      <label>Enter Course Name:</label> &nbsp;
                    <input type="text" className="form-control" />
                    </div>
                    <br></br>
                    <br />
                    <div className="form-group">
                      <label>Enter Registration Number:</label> &nbsp;
                    <input type="text" className="form-control" />
                    </div>
                    <br></br>
                    <br />
                    <div className="form-group">
                      <label>Select the Certificate Required:</label> &nbsp;
                      <select className="form-control" id="sel1">
                        <option>Original Degree</option>
                        <option>Final Marks Memo</option>
                        <option>Marks Memo of each Semester</option>
                      </select>
                    </div>

                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.requestCertification}>Submit</button>
                </div>
              </div>
            </div>
          </div>



          <div className="modal fade" id="myModal3" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Accept Certification Form</h4>
                </div>
                <div className="modal-body">
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Enter College Name:</label> &nbsp;
                    <input type="text" className="form-control" />
                    </div>

                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.acceptCertification}>Submit</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >

    );
  }
}

export default StartCert;
