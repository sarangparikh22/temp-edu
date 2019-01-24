import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../conveyance.css";

import Tooltip from "../../../Tooltip";
import StageComponent from "../Stage";
import SubStageComponent from "../SubStage";

const ProcessComponent = props => {
  var stage = "stage Name";
  const { process, bucketIndex } = props;
  return <StageComponent stage={stage} />;
};

export default ProcessComponent;
