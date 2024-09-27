import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Container className="mt-5" id="contact-me">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
