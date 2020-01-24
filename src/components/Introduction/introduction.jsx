import React, { Component } from "react";
import IntroductionText from "./IntroductionText.json";
import "./style.css";

class Introduction extends Component {
  render() {
    return (
      <div className="introductionContainer">
        <div>
          <p>{IntroductionText.title}</p>
        </div>
        <div className="section">
          <p>{IntroductionText.line1}</p>
        </div>
        <div className="section">
          <p>{IntroductionText.line2}</p>
        </div>
        <div className="section">
          <p>{IntroductionText.line3}</p>
        </div>
      </div>
    );
  }
}

export default Introduction;
