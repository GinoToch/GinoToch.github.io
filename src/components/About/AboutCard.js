import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey iedereen! Mijn naam is <span className="purple">Gino Stock.</span>
            <br />
            Geboren in Aken <span className="purple">NRW, Duitsland,</span>
            en nu woonachtig in Kerkrade <span className="purple">Limburg, Nederland. </span>
            <br />
            Momenteel student software engineering aan <span className="purple">Fontys Hogeschool in Eindhoven.</span>
            <br />
            Het zevende <span className="purple">semester</span> is in volle gang.
            <br />
            <br />
            Naast coderen zijn er ook andere dingen die ik leuk vind!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Muziek
            </li>
            <li className="about-activity">
              <ImPointRight /> Auto's
            </li>
            <li className="about-activity">
              <ImPointRight /> Sporten
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gino</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
