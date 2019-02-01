import React, { Component } from "react";
import "./style.css";
import profile from "./profile.png";
import RegFactoryContract from "../../../../contracts/RegistrationAndCertificateContractFactory.json";
import getWeb3 from "../../../../utils/getWeb3";

class studSideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      accounts: null,
      contract: null,
      instance: null,

      clgAddress: null,
      clgRegNum: null,
      clgEmailID: null,
      clgYOJ: null,
      clgYOP: null
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
    // var clgAddress = this.state.clgAddress;
    var clgAddress = "0x99ba8eb7acd2b9d4f65f7e36ab026cedb57fb979";
    var clgRegNum = this.state.clgRegNum;
    var clgEmailID = this.state.clgEmailID;
    var clgYOJ = this.state.clgYOJ;
    var clgYOP = this.state.clgYOP;

    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .startRegistration(clgAddress, clgRegNum, clgEmailID, clgYOJ, clgYOP)
      .send({ from: accounts[0], gas: 1330000 })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(e) {
        console.log(e);
      });

    var asd = this.state.clgAddress;
    // var sname = document.getElementById("sname").value;
    console.log("Value of sname is ", asd);
  };

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
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img src={profile} alt="Chicago" />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">Grahit</div>
                <div className="profile-usertitle-job">India</div>
              </div>

              <div className="profile-usermenu">
                <ul className="nav">
                  <li className="active">
                    <a href="">
                      <i className="glyphicon glyphicon-home" />
                      Overview{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-user" />
                      Account Settings{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-ok" />
                      Tasks{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-flag" />
                      Help{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              <h4> Certificate Request Form </h4>
              <br />
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="control-label col-sm-2">College Name</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="clgAddress"
                      name="clgAddress"
                      placeholder="Enter College Name"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Registration Number
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="clgRegNum"
                      name="clgRegNum"
                      placeholder="Enter your Registration/Roll Number/Student Identification Number"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    College Email ID
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="clgEmailID"
                      name="clgEmailID"
                      placeholder="Enter the email ID used while registering for the college"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Year of Joining
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="clgYOJ"
                      name="clgYOJ"
                      placeholder="Enter the year you joined the college"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Year of Passing
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="clgYOP"
                      name="clgYOP"
                      placeholder="Enter your year of Passing"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Course:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      placeholder="Enter the course pursued"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default studSideNav;
