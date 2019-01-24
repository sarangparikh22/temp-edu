import React, { Component } from "react";
import PropTypes from "prop-types";
import ProcessComponent from "../Process";
import "../../conveyance.css";

const BucketComponent = props => {
  return (
    /* <div className="bucket--block">
      timeLine && timeLine.map(bucket) =>
      <div key={`bucket-${timeLine}`} className="bucket--block">
        <span className="bucket--name">Hello</span>
        <span className="stage--block">
          <ProcessComponent />
        </span>
      </div>
    </div> */
    <div className="bucket--block">
      <span className="bucket--name">{props.bucketName}</span>
      <span className="stage--block">
        <ProcessComponent />
      </span>
    </div>
  );
};

BucketComponent.propTypes = {
  bucketName: PropTypes.array.isRequired
};

export default BucketComponent;
