import React, { Component } from "react";
import PropTypes from "prop-types";
import Uppernav from "../UpperNav/component";
import Carousel from "../Carousel/component";
import BucketComponent from "./components/Bucket";
import Profile from "../Landing/Student/component";
import "./conveyance.css";

class conveyance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true /* Property In Process Hide/Show flag */
    };
  }
  render() {
    //let { taraTimeline } = this.props.viantResponse;
    let { taraTimeline } = "Process";
    const LOCAL_BUYER = this.props.buyerNationality === "A"; //LOCAL_USER_NATIONALITY;
    // taraTimeline = filterLDAUForLocalBuyer(taraTimeline, LOCAL_BUYER);
    taraTimeline = "ABC;";

    return (
      <div>
        <Uppernav />
        <Carousel />
        <br />
        <br />
        <div className="container">
          <Profile />
          <div className="flow">
            <span className="legend-label">
              <i className="fas in_complete fa-circle notranslate" />
              Incomplete
            </span>
            <span className="legend-label">
              <i className="fas in_progress fa-circle notranslate" />
              In Progress
            </span>
            <span className="legend-label">
              <i className="fas fa-check-circle done notranslate" />
              Done
            </span>
            <span className="legend-label">
              <i className="fas fa-arrow-alt-circle-right done notranslate" />
              Automatic
            </span>
          </div>
          <br />

          <div className="process-title">
            <h2> Process Stages </h2>
          </div>
          <section className="conveyance-diagram">
            <BucketComponent />
            <BucketComponent />
            <BucketComponent taraTimeline={taraTimeline} />
          </section>
        </div>
      </div>
    );
  }
}

conveyance.propTypes = {
  viantResponse: PropTypes.object,
  goToTasks: PropTypes.func,
  buyerNationality: PropTypes.string
};

export default conveyance;
