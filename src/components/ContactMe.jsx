import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactMe = () => {
  return (
    <Container className="mt-5" id="contact-me">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <div className="d-flex align-items-center mb-3">
                <MdEmail size={24} className="me-2" />
                <span>nosawkid@gmail.com</span>{" "}
              </div>
              <div className="d-flex align-items-center">
                <MdPhone size={24} className="me-2" />
                <span>+91 9633702159</span>{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
