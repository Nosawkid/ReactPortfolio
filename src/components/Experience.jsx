import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import Skills from "./Skills";

const Experience = () => {
  return (
    <div>
      <Container className="py-5" id="Experience">
        <h2 className="fs-2 text-decoration-underline fw-bold mb-5">
          Experiences
        </h2>
        <Tabs defaultActiveKey={"first"} className="mb-3">
          <Tab eventKey={"first"} title="Projects">
            <Projects />
          </Tab>
          <Tab eventKey={"second"} title="Skills">
            <Skills />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Experience;
