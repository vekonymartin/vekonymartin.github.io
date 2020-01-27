import React, { Component } from "react";
import { render } from "@testing-library/react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

class TimeLineComponent extends Component {
  render() {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background:
            "rgb(" +
            this.props.r +
            "," +
            this.props.g +
            "," +
            this.props.b +
            ")",
          color: this.props.textColor
        }}
        date={this.props.date}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">{this.props.work}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {this.props.workPlace}
        </h4>
        <p>{this.props.desc}</p>
      </VerticalTimelineElement>
    );
  }
}

export default TimeLineComponent;
