import React from "react";
import PropTypes from "prop-types";

class TooltipComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newOffsetLeft: "" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.initialTooltipWidth = this.tooltip.getBoundingClientRect().width;
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const triggerBound = this.trigger.getBoundingClientRect();
    const tooltipBound = this.tooltip.getBoundingClientRect();
    const triggerWidth = triggerBound.width;
    const triggerLeft = triggerBound.left;
    const tooltipWidth = tooltipBound.width;

    // // // CALCULATE OVERLAP

    if (window.innerWidth < this.initialTooltipWidth) {
      this.setState({
        offset: -(triggerLeft + triggerWidth / 2 - window.innerWidth / 2),
        width: window.innerWidth
      });
    } else {
      let offset = null;
      const offsetToLeft =
        window.innerWidth - (triggerWidth / 2 + tooltipWidth / 2 + triggerLeft);
      const offsetToRight = triggerLeft + triggerWidth / 2 - tooltipWidth / 2;

      if (offsetToLeft < 0) {
        offset = offsetToLeft;
      }
      if (offsetToRight < 0) {
        offset = -offsetToRight;
      }

      this.setState({
        offset: offset,
        width: null
      });
    }
  }

  tooltipClicked = () => {
    let range;
    if (document.selection) {
      // IE
      range = document.body.createTextRange();
      range.moveToElementText(this.tooltip);
      range.select();
    } else if (window.getSelection) {
      // others
      range = document.createRange();
      range.selectNode(this.tooltip);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    document.execCommand("copy");
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

  render() {
    return (
      <div
        className={`tooltip justify-center relative ${
          this.props.contentClasses
        }`}
        onClick={event => event.stopPropagation()}
      >
        <span
          ref={c => {
            this.trigger = c;
          }}
          className="tooltip--trigger"
        >
          {this.props.children}
        </span>
        {this.props.copyContentOnClick ? (
          <button
            type="button"
            ref={c => {
              this.tooltip = c;
            }}
            className={`tooltip--content absolute t-c-blue p-l-8 p-r-8 p-t-4 p-b-4 ${
              this.props.tooltipClasses
            }`}
            style={{
              transform: `translateX(${this.state.offset}px)`,
              width: this.state.width
            }}
            onClick={this.tooltipClicked}
          >
            {this.props.tooltip}
            <div
              className={`tooltip__copied-text
                ${this.state.copied ? "show" : "hide"}`}
            >
              Document hash copied.
            </div>
          </button>
        ) : (
          <span
            ref={c => {
              this.tooltip = c;
            }}
            className={`tooltip--content absolute t-c-blue p-l-8 p-r-8 p-t-4 p-b-4 ${
              this.props.tooltipClasses
            }`}
            style={{
              transform: `translateX(${this.state.offset}px)`,
              width: this.state.width
            }}
          >
            {this.props.tooltip}
          </span>
        )}
      </div>
    );
  }
}

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  contentClasses: PropTypes.string,
  tooltip: PropTypes.node.isRequired,
  tooltipClasses: PropTypes.string,
  maxWidth: PropTypes.string,
  copyContentOnClick: PropTypes.bool
};

export default TooltipComponent;
