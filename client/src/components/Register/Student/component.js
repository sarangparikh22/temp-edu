import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import RegFactoryContract from "../../../contracts/RegistrationAndCertificateContractFactory.json";
import getWeb3 from "../../../utils/getWeb3";
import axios from 'axios';



import { Link } from "react-router-dom";
import { addTransaction } from '../../../actions/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { throws } from "assert";

import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import "./student.css";

const Wallet = require('ethereumjs-wallet');
const Transaction = require('../../../utils/sendTxContract');

class student extends Component {
  /* ################ Smart Contract Interaction begins ############# */

  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
      instance: null,

      sname: null,
      phone: null,
      emailID: null,
      pwd: null,
      username: null
    };
    this.addTransaction = this.props.addTransaction.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RegFactoryContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RegFactoryContract.abi,
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

  handleSubmit = event => {
    event.preventDefault();
    var sname = this.state.sname;
    var phone = this.state.phone;
    var emailID = this.state.emailID;
    let password = this.state.pwd;
    let username = this.state.username;
    if (username && password) {
      console.log('Registering User....');

      axios.post('http://localhost:5000/register', { "username": username, "password": password })
        .then((response) => {
          if (response.data.message) {
            console.log(response.data.message);
            if (response.data.message != `Username ${username} already exsists.`) {
              console.log(response.data.data.wallet);
              let walletRead = Wallet.fromV3(response.data.data.wallet, response.data.data.password)
              let privKey = walletRead.getPrivateKeyString();
              console.log(walletRead.getPrivateKeyString());
              const { web3, accounts, contract } = this.state;
              let value = web3.utils.toWei('0.5', 'ether');
              web3.eth.sendTransaction({ to: response.data.data.wallet.address, from: accounts[0], value: value })
              Transaction.doInteractionWithSC(privKey, response.data.data.wallet.address, `createStudent('${sname}','${phone}','${emailID}')`)
            }
          }
        })
    } else {
      console.log('Please Enter Username and Password');
    }






    /*  const { accounts, contract } = this.state;
      contract.methods
        .createStudent(sname, phone, emailID)
        .send({ from: accounts[0], gas: 330000 })
        .then(function (result) {
          console.log(result);
          window.confirm("You have successfully Registered as Student");
          var blockData = {
            transactionHash: result.transactionHash,
            blocknumber: result.blockNumber,
            details: "State - Student Created"
          };
          this.props.addTransaction(blockData)
        }.bind(this))
        .catch(function (e) {
        })
        .catch(function (e) {
          console.log(e);
        });
  
      console.log("Value of sname is ", sname); */

  };
  /* ############# SmartContract Interaction Ends ############# */

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
      //  sname: event.target.value
    });
  };

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
                  id="sname"
                  type="text"
                  className="form-control"
                  name="sname"
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
                  id="emailID"
                  type="email"
                  className="form-control"
                  name="emailID"
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
              <br></br>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-education" />
                </span>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Please enter a user name"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-education" />
                </span>
                <input
                  id="pwd"
                  type="password"
                  className="form-control"
                  name="pwd"
                  placeholder="Please enter a password"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />

              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTransaction
  }, dispatch)
}



export default connect(null, mapDispatchToProps)(student)
