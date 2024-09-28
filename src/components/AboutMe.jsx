import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container className="mt-5" id="about-me">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="text-left">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Hello! I'm Yaseen, an aspiring software developer from Kerala,
                India. I recently graduated and am currently focused on building
                my skills in the MERN stack (MongoDB, Express, React, Node.js)
                to create dynamic web applications.
              </Card.Text>
              <Card.Text>
                My passion lies in developing impactful software solutions that
                enhance user experiences and solve real-world problems. I take
              </Card.Text>
              <Card.Text>
                In addition to my technical skills, I draw inspiration from the
                world of creativity, particularly from the magical universe of
                Harry Potter. This passion fuels my approach to design and
                functionality, ensuring my projects are not only effective but
                also engaging.
              </Card.Text>
              <Card.Text>
                I am continuously learning and exploring new technologies,
                striving to improve my front-end skills with HTML, CSS, and
                JavaScript. Recently, I've embarked on a journey to learn Java
                and the Spring Framework, aiming to deepen my understanding of
                back-end development and create more robust applications.
              </Card.Text>
              <Card.Text>
                I’m excited to connect, collaborate, and share my journey in the
                tech community. Feel free to explore my projects and reach out!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
