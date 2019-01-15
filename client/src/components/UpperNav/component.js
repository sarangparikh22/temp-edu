import React, { Component } from "react";
import home_logo from "./certimy_home.png";
import "./UpperNav.css";
class upperNav extends Component {
  //state = {  }
  render() {
    return (
      /* <header className="main-navigation__wrapper">
        <div className="main-navigation">
          <nav role="navigation" className="main-navigation__nav">
            <div className="main-navigation__logo">
              <div className="branding--title">
                Title
                <div className="branding--title__sub">Sub Title</div>
              </div>
            </div>
            <div className="main-navigation__nav--primary">Hello</div>
          </nav>
        </div> */

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
                <a href="#">Home</a>
              </li>
              <li className="active">
                <a href="#">Student Registration</a>
              </li>
              <li>
                <a href="#">University Registration</a>
              </li>
              <li>
                <a href="#">Verifier Registration</a>
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
