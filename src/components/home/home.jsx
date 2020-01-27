import React, { Component } from "react";
import "./titlegenerate";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div class="title">
        <div class="title-top">
          <h1>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='["Hello there!", "Welcome to my webpage!"]'
            ></span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
