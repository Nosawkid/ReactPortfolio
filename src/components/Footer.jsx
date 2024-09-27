import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Yaseen. All rights reserved.
            </p>
            <p>
              Template inspired from
              <a
                href="https://tarry-hare-e7f.notion.site/Hi-I-m-Henry-Vu-8776b664e5594e818e38b43b2996b120"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Henry Vu
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
