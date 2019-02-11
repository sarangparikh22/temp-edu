import React, { Component } from "react";
import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import RegFactoryContract from "../../../contracts/RegistrationAndCertificateContractFactory.json";
import getWeb3 from "../../../utils/getWeb3";
import "./issuer.css";
class issuer extends Component {
  /* ################ Smart Contract Interaction begins ############# */

  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
      instance: null,

      instituteName: null,
      instituteCode: null,
      instituteAISHECode: null
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
    var instituteName = this.state.instituteName;
    var instituteCode = this.state.instituteCode;
    var instituteAISHECode = this.state.instituteAISHECode;
    event.preventDefault();
    const { accounts, contract } = this.state;
    contract.methods
      .createCollege(instituteName, instituteCode, instituteAISHECode)
      .send({ from: accounts[1], gas: 330000 })
      .then(function (result) {
        console.log(result);
        window.confirm("You have successfully Registered as Educational Institute");
      })
      .catch(function (e) {
        console.log(e);
      });

    //console.log("Value of Institute Name is ", instituteName);
  };
  /* ############# SmartContract Interaction Ends ############# */

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
      <div>
        <Uppernav />
        <Carousel />

        <div className="container">
          <div className="iss">
            <h2 className="h">Academic Institutes Registration form</h2>
            <br />
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2">Institute Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="instituteName"
                    name="instituteName"
                    placeholder="Enter Institute's Name"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">Institute Code</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="instituteCode"
                    name="instituteCode"
                    placeholder="Enter Institute Code"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Institute AISHE Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="instituteAISHECode"
                    name="instituteAISHECode"
                    placeholder="Enter AISHE Code of the Institute"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2">Statutory Body</label>
                <div className="col-sm-10">
                  <select>
                    <option value="vc1">University Grants Commission</option>
                    <option value="vc2">Indian Nursing Council</option>
                    <option value="vc3">
                      National Council of Teacher Education
                    </option>
                    <option value="vc4">Rehabilitation Council of India</option>
                    <option value="vc5">Medical Council of India</option>
                    <option value="vc6">
                      All India Council for Technical Education
                    </option>
                    <option value="vc6">Dental Council of India</option>
                    <option>Council of Architecture</option>
                    <option>Pharmacy Council of India</option>
                    <option>Bar Council of India</option>
                    <option>Central Council of Homeopathy</option>
                    <option>Central Council of Indian Medicine</option>
                    <option>
                      National Council for Hotel Management and Catering
                      Technology
                    </option>
                    <option>
                      Indian Council of Agricultural Research Institute of
                      Company
                    </option>
                    <option>Secretaries of India </option>
                    <option>Central Government</option>
                    <option>State Government</option>
                    <option>Institute of Chartered Accountants of India</option>
                    <option>Institute of Actuaries of India</option>
                  </select>
                </div>
              </div>
              <br />

              <div className="form-group">
                <label className="control-label col-sm-2">Institute Type</label>
                <div className="col-sm-10">
                  <label className="radio-inline">
                    <input type="radio" name="optradio" checked readOnly />
                    University &nbsp; &nbsp;
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />
                    Board &nbsp; &nbsp;
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />
                    Standalone Institute &nbsp; &nbsp;
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2">
                  Date of Establishment
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2">
                  Past Name of the Institution
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2">
                  Past Name of the Institution Valid till Date
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>

              <br />

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default issuer;
