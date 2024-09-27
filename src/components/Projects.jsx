import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Row>
        <Col className="mb-5" md={6}>
          <ProjectCard
            link="https://nosawkid.github.io/KeralaTourism/"
            title={"Kerala Tourism"}
            text={
              "A simple webpage that gives you information about the tourist places in Kerala"
            }
          />
        </Col>
        <Col className="mb-5" md={6}>
          {" "}
          <ProjectCard
            link="https://nosawkid.github.io/LoginTodo/"
            title={"A Login and Todo Page"}
            text={"Lets you login and mark completed ToDo items"}
          />
        </Col>
        <Col className="mb-5" md={6}>
          {" "}
          <ProjectCard
            link="https://nosawkid.github.io/ProfileCard/"
            title={"A Profile Card"}
            text={"Profile Card that displays important aattributes"}
          />
        </Col>
        <Col className="mb-5" md={6}>
          {" "}
          <ProjectCard
            link="https://nosawkid.github.io/RandomPeople/"
            title={"Random People Info Generator"}
            text={"Generates info about random people"}
          />
        </Col>
        <Col className="mb-5" md={6}>
          {" "}
          <ProjectCard
            link="https://nosawkid.github.io/DomManipulation/"
            title={"DOM Manipulation example"}
            text={"Simple Example of DOM Manipulation"}
          />
        </Col>
        <Col className="mb-5" md={6}>
          {" "}
          <ProjectCard
            link="https://nosawkid.github.io/EntriAcademia/"
            title={"Entri Academia"}
            text={"Website of Entri Academia"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
