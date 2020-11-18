import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";
import TimelineComponent from "./timelineComponent";
import TimelineText from "./TimeLineText.json";

class TimeLine extends Component {
  render() {
    return (
      <div className="timeline-container">
        <VerticalTimeline>
        <TimelineComponent
            r="221"
            g="19"
            b="19"
            textColor="#fff"
            work={TimelineText.JobTitleActual}
            workPlace={TimelineText.JobActualAddress}
            date={TimelineText.JobActualDate}
            desc={TimelineText.JobActualDescr}
          />
          <TimelineComponent
            r="62"
            g="167"
            b="6"
            textColor="#fff"
            work={TimelineText.JobTitleOne}
            workPlace={TimelineText.JobOneAddress}
            date={TimelineText.JobOneDate}
            desc={TimelineText.JobOneDescr}
          />
          <TimelineComponent
            r="33"
            g="150"
            b="243"
            textColor="#fff"
            work={TimelineText.JobTitleTwo}
            workPlace={TimelineText.JobTwoAddress}
            date={TimelineText.JobTwoDate}
            desc={TimelineText.JobTwoDescr}
          />
          <TimelineComponent
            r="130"
            g="14"
            b="184"
            textColor="#fff"
            work={TimelineText.JobTitleThree}
            workPlace={TimelineText.JobThreeAddress}
            date={TimelineText.JobThreeDate}
            desc={TimelineText.JobThreeDescr}
          />
          <TimelineComponent
            r="33"
            g="127"
            b="254"
            textColor="#fff"
            work={TimelineText.JobTitleFour}
            workPlace={TimelineText.JobFourAddress}
            date={TimelineText.JobFourDate}
            desc={TimelineText.JobFourDescr}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default TimeLine;
