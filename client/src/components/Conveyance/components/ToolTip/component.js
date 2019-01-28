import React, { Component } from "react";
class ToolTip extends Component {
  // state = {  }
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

export default ToolTip;
