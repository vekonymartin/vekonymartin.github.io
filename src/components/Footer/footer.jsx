import React, { Component } from "react";
import "./style.css";
// import { Container } from "react-bootstrap/lib/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render() {
    return (
      <div id="footer-main-div">
        <div class="footer-social-icons">
          <ul>
            <li>
              <a href="https://github.com/vekonymartin" target="blank">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/
                      vékony-martin-gábor-85675615b
                      "
                target="blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="blank">
                <i class="fa fa-google"></i>
              </a>
            </li>
          </ul>
        </div>

        <Container>
          <hr />
          <Row>
            <Col>
              <h3>Contact me:</h3>
              <p>E-mail address: vekony.martin15@gmail.com</p>
              <p>Phone: +3630/863-4644</p>
            </Col>
            <Col></Col>
          </Row>
          <div>
            <p>Privacy policy</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Footer;
