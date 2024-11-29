import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ik.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Ik zal me even<span className="purple"> voorstellen </span> 
            </h1>
            <p className="home-about-body">
            Hi, ik ben Gino
            Ik ben een  developer met ervaring in talen en frameworks zoals
              <br />
              <i>
                <b className="purple"> C#, Python, Golang, Java, Swift, React en Vue. </b>
              </i>
              <br />
              <br />
              Naast coderen heb ik expertise in&nbsp;
              <i>
                <b className="purple">Git, CI/CD pipelines, geautomatiseerd testen en werken met Azure.</b>
              </i>
              <br />
              <br />
              Buiten werk ben ik een liefhebber van <b className="purple">sporten, auto’s en muziek. </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Voeg me toe</h1>
            <p>
               <span className="purple">Connect </span>met mij
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GinoToch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/g.in.o"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
