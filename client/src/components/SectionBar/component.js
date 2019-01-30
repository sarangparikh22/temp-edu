import React, { Component } from "react";
import "./SectionBar.css";

class SectionBar extends Component {
  state = {};
  render() {
    return (
      <section className="tab-bar">
        <span className="tab-bar--item">Tasks</span>
      </section>
    );
  }
}

export default SectionBar;
