import React, { Component } from "react";
import SkillText from "./SkillText";
import Card from "react-bootstrap/Card";
import images from "./images";
import "./style.css";

class Skill extends Component {
  render() {
    return (
      <div class="card-container">
        <h1></h1>
        <div id="card-sector">
          <Card id="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("./csharp.png")} />
            <Card.Header>{SkillText.title}</Card.Header>
            <Card.Body>
              <Card.Text>{SkillText.mainTechText}</Card.Text>
              <Card.Text>
                {SkillText.mainTech.map((tech, i) => (
                  <li key={i}>- {tech}</li>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Skill;
