import React from "react";
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
  const { stage } = props;
  return (
    <span className="stage--block">
      <span className="stage--block--name">{stage}</span>
      &nbsp; &nbsp; &nbsp;
      <span className="stage--block--icon">
        <i className="fas notranslate fa-circle in_progress" />
        &nbsp; &nbsp;
        <i className="fas notranslate fa-circle in_complete" />
        &nbsp; &nbsp;
        <i className="fas notranslate fa-circle in_complete" />
        &nbsp; &nbsp;
        <i className="fas notranslate fa-circle in_complete" />
      </span>
    </span>
  );
};

export default StageComponent;
