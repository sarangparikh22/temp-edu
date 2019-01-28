import React, { Component } from "react";
import "./Well1.css";
class Well1 extends Component {
  state = {};
  render() {
    return (
      <div className="stepwizard">
        <div className="stepwizard-row">
          <div className="stepwizard-step">
            <button type="button" className="btn btn-default btn-circle">
              1
            </button>
            <p>Cart</p>
          </div>
          <div className="stepwizard-step">
            <button type="button" className="btn btn-primary btn-circle">
              2
            </button>
            <p>Shipping</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              3
            </button>
            <p>Payment</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              4
            </button>
            <p>Payment</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              5
            </button>
            <p>Payment</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              6
            </button>
            <p>Payment</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              7
            </button>
            <p>Payment</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className="btn btn-default btn-circle"
              disabled="disabled"
            >
              8
            </button>
            <p>Payment</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Well1;
