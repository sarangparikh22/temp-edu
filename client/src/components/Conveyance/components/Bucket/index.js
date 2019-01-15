import React, { Component } from "react";
import PropTypes from "prop-types";
import ProcessComponent from "../Process";
import "../../conveyance.css";

const BucketComponent = props => {
  const { taraTimeline } = props;
  return (
    <div className="bucket--block">
      <span className="bucket--name">Process Name</span>
      <span className="stage--block">
        <ProcessComponent />
      </span>
    </div>
  );
};

BucketComponent.propTypes = {
  taraTimeline: PropTypes.array.isRequired
};

export default BucketComponent;
