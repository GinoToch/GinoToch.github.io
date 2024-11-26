import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJetbrains,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiAzurepipelines } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAzurepipelines />
      </Col>
    </Row>
  );
}

export default Toolstack;
