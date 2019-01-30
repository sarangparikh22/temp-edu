import React, { Component } from "react";
import { Link } from "react-router-dom";
import home_logo from "./certimy_home.png";
import "./UpperNav.css";
class upperNav extends Component {
  //state = {  }
  render() {
    return (
      <div className="upp">
        <nav role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
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
          </div>
        </nav>
      </div>
      //  </header>
    );
  }
}

export default upperNav;
