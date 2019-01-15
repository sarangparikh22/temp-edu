import React, { Component } from "react";
import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import "./student.css";
class student extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <Uppernav />
        <Carousel />

        <div className="container">
          <div className="stud">
            <h2 className="h">Student Registration form</h2>
            <form>
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
                />
              </div>
              <br />

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope" />
                </span>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email ID"
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
