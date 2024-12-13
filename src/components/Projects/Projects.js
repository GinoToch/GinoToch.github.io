import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/heijmans.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ProSwipe"
              description="Een Tinder clone van linked in. Een app die werkzoekende mensen tussen bedrijven laat swipen zoals bij Tinder. De werkgever krijgt een lijst van alle mensen die 'Ja' geswiped hebben. Daarna is chatten mogeljk"
             
              demoLink="https://www.linkedin.com/in/ginostock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Connected Airlines"
              description="Voor een bedrijf heeft mijn team tijdens een proftaak een airline management systeem gemaakt. Wij hebben voor dit project AWS gebruikt en het gehele project scalable gemaakt. Tevens hebben we een live tracker voor vliegtuigen geintegreerd"
             
              demoLink="https://www.linkedin.com/in/ginostock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Heijmans"
              description="Voor Heijmans heb ik tijdens een proftaak een 3D safety game mogen maken. Dit was een unieke ervaring waarin ik voor de eerste keer op professioneel niveau met 3D modellen werkte, en dit ook moest laten werken met een VR headset. Bekijk de video!"
              demoLink="https://www.youtube.com/watch?v=Aq3_v7V9R2Q"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
             
              title="Vientro"
              description="Ik ben bezig met een eigen bedrijf op te zetten. Het gaat een app zijn, maar voor nu wil ik er nog niet te veel over kwijt. Het resultaat komt hier te staan"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
