import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import home_logo from "./certimy_home.png";
import "./UpperNav.css";


const Wallet = require('ethereumjs-wallet');
const Transaction = require('../../utils/sendTxContract');


class upperNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      pwd: null
    };
    // this.addTransaction = this.props.addTransaction.bind(this);
  }

  handleLogin = event => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.pwd;

    if (username && password) {
      console.log('User logging in....');

      axios.post('http://localhost:5000/login', { "username": username, "password": password })
        .then((response) => {





          /* if (response.data.message) {
             console.log(response.data.message);
             if (response.data.message !== `Username or Password Incorrect` && response.data.message !== `User not Found`) {
               console.log(response.data.data.wallet);
               let walletRead = Wallet.fromV3(response.data.data.wallet, response.data.data.password)
               let privKey = walletRead.getPrivateKeyString();
               console.log(walletRead.getPrivateKeyString()); * /
               //const { web3, accounts, contract } = this.state;
               //let value = web3.utils.toWei('0.5', 'ether');
               // web3.eth.sendTransaction({ to: response.data.data.wallet.address, from: accounts[0], value: value })
               // Transaction.doInteractionWithSC(privKey, response.data.data.wallet.address, `createStudent('${sname}','${phone}','${emailID}')`)
             }
           } */
        })
    } else {
      console.log('Please Enter Username and Password');
    }

  }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="upp">
        <nav>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                <img className="img_home" src={home_logo} alt="Chicago" />
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/student">Home</Link>
              </li>
              <li className="active">
                <Link to="/student">Student Registration</Link>
              </li>
              <li>
                <Link to="/issuer">University Registration</Link>
              </li>
              <li>
                <Link to="/verifier">Verifier Registration</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a>
                <ul className="dropdown-menu">
                  <li>
                    <form className="form-inline">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-user" />
                        </span>
                        <input
                          id="username"
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="User name"
                          required
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-lock" />
                        </span>
                        <input
                          id="pwd"
                          type="password"
                          className="form-control"
                          name="pwd"
                          placeholder="Password"
                          required
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary" onClick={this.handleLogin}> Log In </button>
                    </form></li>
                </ul>

              </li>
            </ul>
          </div>



        </nav>
      </div>
    );
  }
}

export default upperNav;
