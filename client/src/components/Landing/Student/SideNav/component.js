import React, { Component } from "react";
import "./style.css";
import profile from "./profile.png";

class studSideNav extends Component {
  state = {};
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
                    <a href="#">
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
              <form className="form-horizontal" action="/action_page.php">
                <div className="form-group">
                  <label className="control-label col-sm-2" for="cname">
                    College Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      placeholder="Enter College Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="cReg">
                    Registration Number
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="cReg"
                      placeholder="Enter your Registration/Roll Number/Student Identification Number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="course">
                    Course pursued
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      placeholder="Enter the course pursued"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="yoj">
                    Year of Joining
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="yoj"
                      placeholder="Enter the year you joined the college"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="yop">
                    Year of Passing
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="yop"
                      placeholder="Enter your year of Passing"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="pwd">
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
