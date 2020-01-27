import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import SkillText from "./SkillText";
import SkillCarouselItem from "./skill";
import "./style.css";

class Skill extends Component {
  render() {
    return (
      <div className="skill-container">
        <Carousel>
          {/* <SkillCarouselItem
            title="asdf"
            mainTechText={SkillText.mainTechText}
            mainTechMap={SkillText.mainTech.map((tech, i) => (
              <li key={i}>- {tech}</li>
            ))}
            srcImg={require("../Skills/csharp.png")}
            altImg="csharp"
          /> */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./csharp.png")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{SkillText.title}</h3>
              <p>{SkillText.mainTechText}</p>
              <p>
                {SkillText.mainTech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src={require("./java.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./unity.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Skill;
