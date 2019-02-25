import React, { Component } from "react";
import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import Web3 from "web3";
import getWeb3 from "../../../utils/getWeb3";
import Ins from "../../../utils/getContract";
// import { instanceC } from "../../../utils/getContract";
import "./verifier.css";
class verifier extends Component {


  handleV = async (event) => {
    event.preventDefault();


    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    // // Get network provider and web3 instance.
    // 
    window.confirm("Pressed Submit - ");
    // // Use web3 to get the user's accounts.
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts)

    await Ins.methods.createStudent("RRR", 8888, "rrrr")
      .send({ from: accounts[0], gas: 330000 })
      .then(function (result) {
        console.log(result);
        window.confirm("You have successfully Registered as Student");
      }).catch(function (e) {
        console.log(e);
      })
    /* const web3 = getWeb3();
 
     // Use web3 to get the user's accounts.
     const accounts = await web3.eth.getAccounts();
     await instanceC.methods.createStudent("RRR", 8888, "rrrr")
       .send({ from: accounts[0], gas: 330000 })
       .then(function (result) {
         console.log(result);
         window.confirm("You have successfully Registered as Student");
       }).catch(function (e) {
         console.log(e);
       }) */

  }


  // state = {  }
  render() {
    return (
      <div>
        <Uppernav />
        <Carousel />

        <div className="container">
          <div className="bfo">
            <h2 className="h">Verifier Registration form</h2>
            <br />
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Verifier Category
        </label>
                <div className="col-sm-10">
                  <select>
                    <option value="vc1">Domestic Academic Institutions</option>
                    <option value="vc2">Domestic Companies</option>
                    <option value="vc3">Foreign Academic Institutions</option>
                    <option value="vc4">Foreign Companies</option>
                    <option value="vc5">Indian Government </option>
                    <option value="vc6">Statutory Entities</option>
                    <option value="vc6">Others</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group">
                <h4>Company Details</h4>
                <label className="control-label col-sm-2">
                  Company Name
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
                  Address
        </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Enter address in full"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Website URL
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter website url"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  GST Identification Number
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter GST Identification Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  GST State Code
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter GST State Code"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <h4>Contact Person Details</h4>
                <label className="control-label col-sm-2">
                  Company Person Name
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Person's Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Email
        </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="url"
                    placeholder="Enter email ID"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Mobile Number
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Landline number
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter Landline Number"
                  />
                </div>
              </div>
              <br />

              <div className="form-group">
                <h4>Alternative Contact Person Details</h4>
                <label className="control-label col-sm-2" >
                  Alternative Contact Person Name
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Person's Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" >
                  Alternative Contact Person Email
        </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="url"
                    placeholder="Enter email ID"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" >
                  Alternative Contact Person Mobile Number
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" >
                  Alternative Contact Person Landline number
        </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter Landline Number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2" >
                  Password:
        </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
            </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary" onClick={this.handleV}>
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

export default verifier;
