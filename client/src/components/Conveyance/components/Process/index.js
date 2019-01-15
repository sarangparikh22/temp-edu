import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../conveyance.css";

import Tooltip from "../../../Tooltip";
import StageComponent from "../Stage";
import SubStageComponent from "../SubStage";

const ProcessComponent = props => {
  const { process, bucketIndex } = props;
  return <StageComponent />;
};

export default ProcessComponent;
