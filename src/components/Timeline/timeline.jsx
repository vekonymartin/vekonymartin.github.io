import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";

class TimeLine extends Component {
  render() {
    return (
      <div className="timeline-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(62, 167, 6)", color: "#fff" }}
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">BKV Zrt.</h3>
            <h4 className="vertical-timeline-element-subtitle">Budapest</h4>
            <p>
              Maintain, fixed problem on the Budapest metro line (CCTV,
              Emergency Call, Switch)
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
            <h4 className="vertical-timeline-element-subtitle">Vác</h4>
            <p>Teaching children game developing.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">OtterWorks</h3>
            <h4 className="vertical-timeline-element-subtitle">Budapest</h4>
            <p>Develop game with Unity Engine.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Zyxel</h3>
            <h4 className="vertical-timeline-element-subtitle">Budapest</h4>
            <p>Configurate network devices.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default TimeLine;
