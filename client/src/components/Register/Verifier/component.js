import React, { Component } from "react";
import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import "./verifier.css";
class verifier extends Component {
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
            <form className="form-horizontal" action="/action_page.php">
              <div className="form-group">
                <label className="control-label col-sm-2" for="ctgry">
                  Verifier Category
                </label>
                <div class="col-sm-10">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label class="control-label col-sm-2" for="email">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="url"
                    placeholder="Enter email ID"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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
                <label className="control-label col-sm-2" for="email">
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

              <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">
                  Password:
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-primary">
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
