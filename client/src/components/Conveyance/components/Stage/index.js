import React, { Component } from "react";
import "../../conveyance.css";
/*class StageComponent extends Component {
  //state = {};
  render() {
    return (
      <span className="stage--block">
        <span className="stage--block--name">Stage Name 2</span>
        <span className="stage--block--icon">
          <i className="fas notranslate fa-circle in_complete" />
        </span>
      </span>
    );
  }
} */

const StageComponent = props => {
  const { bucketIndex, index, stage } = props;
  return (
    <span className="stage--block">
      <span className="stage--block--name">{stage}</span>
      <span className="stage--block--icon">
        <i className="fas notranslate fa-circle in_complete" />
      </span>
    </span>
  );
};

export default StageComponent;
