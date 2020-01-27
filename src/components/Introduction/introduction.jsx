import React, { Component } from "react";
import IntroductionText from "./IntroductionText.json";
import "./style.css";
import "../../animation/fadeIn.css";

class Introduction extends Component {
  render() {
    return (
      <div className="titleContainer">
        <div>
          <p>{IntroductionText.title}</p>
        </div>
        <div className="flexIntroductionContainer">
          <div className="felxItem">
            <div className="section animated animatedFadeInUp fadeInUp">
              <p>{IntroductionText.line1}</p>
            </div>
            <div className="section animated animatedFadeInUp fadeInUp">
              <p>{IntroductionText.line2}</p>
            </div>
            <div className="section animated animatedFadeInUp fadeInUp">
              <p>{IntroductionText.line3}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
