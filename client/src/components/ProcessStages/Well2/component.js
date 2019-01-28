import React, { Component } from "react";
import "./Well2.css";

const Well2 = props => {
  const { bucketIndex, index, stage, status } = props;

  return (
    <div className="stepwizard-step">
      <button type="button" className={`btn btn-default btn-circle ${status}`}>
        {index}
      </button>
      <p>{stage}</p>
      <i className={`fas notranslate fa-circle ${status}`} />
    </div>
  );
};

export default Well2;
