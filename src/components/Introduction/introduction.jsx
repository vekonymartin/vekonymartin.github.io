import React, { Component } from "react";
import IntroductionText from "./IntroductionText.json";
import "./style.css";
import "../../animation/fadeIn.css";

class Introduction extends Component {
  render() {
    return (
      <div className="titleContainer">
        <div className="flexIntroductionContainer">
          <div className="felxItem">
            <p
              className="titleBox animated animatedFadeInUp fadeInUp"
              style={{ "animation-delay": "0.2s" }}
            >
              {IntroductionText.title}
            </p>
            <div
              className="section animated animatedFadeInUp fadeInUp"
              style={{ "animation-delay": "0.5s" }}
            >
              <p>{IntroductionText.line1}</p>
            </div>
            <div
              className="section animated animatedFadeInUp fadeInUp"
              style={{ "animation-delay": "0.6s" }}
            >
              <p>{IntroductionText.line2}</p>
            </div>
            <div
              className="section animated animatedFadeInUp fadeInUp"
              style={{ "animation-delay": "0.7s" }}
            >
              <p>{IntroductionText.line3}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
