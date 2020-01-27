import React from "react";
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Skill extends Component {
  render() {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Skills/csharp.png"
          alt={this.props.altImg}
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.mainTechText}</p>
          <p>{this.props.mainTechMap}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default Skill;
