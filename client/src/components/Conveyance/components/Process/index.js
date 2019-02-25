import React from "react";
import "../../conveyance.css";
import StageComponent from "../Stage";


const ProcessComponent = props => {
  var stage = "stage Name";
  const { process, bucketIndex } = props;
  return <StageComponent stage={stage} />;
};

export default ProcessComponent;
