import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SimpleStorageContract from "../../../contracts/SimpleStorage.json";
import RegFactoryContract from "../../../contracts/RegistrationAndCertificateContractFactory.json";
import getWeb3 from "../../../utils/getWeb3";

import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import "./student.css";
class student extends Component {
  /* ################ Ethereum ############# */
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    instance: null,

    name: null,
    phone: null,
    emailID: null
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
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

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods
      .createS("XYooptyUKZ", 5)
      .send({ from: accounts[0], gas: 130000 });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getS().call();
    console.log(response);

    // Update state with the result.
    // this.setState({ storageValue: response });
  };
  /* ############# Ethereum Ends ############# */

  /* handleSubmit = event => {
    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .createStudent("JSR", 98, "hyi")
      .send({ from: accounts[0], gas: 130000 })
      .then(function(result) {
        console.log(result);
        console.log(event.target[0].value);
        /* contract.methods
          .getS()
          .call()
          .then(function(result) {
            console.log(result); */
  /*  })
      .catch(function(e) {
        console.log(e);
      });
  };  */

  /* constructor(props) {
    super(props);
    this.state = {
      name: null,
      mother: null,
      phone: null,
      email: null,
      regNo: null,
      yearOfJoining: null,
      yearOfPassing: null,
      web3: null, 
      accounts: null, 
      contract: null
    };
  } */

  render() {
    return (
      <div>
        <Uppernav />
        <Carousel />

        <div className="container">
          <div className="stud">
            <h2 className="h">Student Registration form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Full Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input
                  id="mother"
                  type="text"
                  className="form-control"
                  name="mother"
                  placeholder="Mother's Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-phone" />
                </span>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Mobile Number"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope" />
                </span>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email ID"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-education" />
                </span>
                <input
                  id="regNo"
                  type="text"
                  className="form-control"
                  name="regNo"
                  placeholder="Undergraduation Registration Number"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-education" />
                </span>
                <input
                  id="yearOfJoining"
                  type="text"
                  className="form-control"
                  name="yearOfJoining"
                  placeholder="Year of Joining"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-education" />
                </span>
                <input
                  id="yearOfPassing"
                  type="text"
                  className="form-control"
                  name="yearOfPassing"
                  placeholder="Year of Passing"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default student;
