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
          <div class="col-md-9">
            <div class="profile-content">
              Some user related content goes here...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default studSideNav;
