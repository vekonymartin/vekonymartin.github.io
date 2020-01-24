import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class TimeLine extends Component {
  render() {
    return (
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">BKV Zrt.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Logiscool instructor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">OtterWorks</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Zyxel</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default TimeLine;
