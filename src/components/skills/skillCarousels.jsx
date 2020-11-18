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
          <div className="skill-overlay">
            <img
              className="d-block w-100"
              src={require("./../../svg/mainTech.png")}
              alt="First slide"
            />
            </div>
            <Carousel.Caption>
              <h1>{SkillText.title}</h1>
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
              src={require("./../../svg/secondTech.png")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>{SkillText.title}</h1>
              <p>{SkillText.secondaryTechText}</p>
              <p>
              {SkillText.secondaryTech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./../../svg/otherTech.png")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>{SkillText.title}</h1>
              <p>{SkillText.secondaryTechText}</p>
              <p>              
                {SkillText.secondaryTech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}</p>
            </Carousel.Caption>
          </Carousel.Item>   
        </Carousel>
        </div>
    );
  }
}

export default Skill;
