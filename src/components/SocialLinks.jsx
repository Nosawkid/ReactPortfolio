import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Nosawkid",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/muhammed-yaseen-sidhik-6008b0319/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/Nosawkid",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/nataniel_richardson/",
    },
  ];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Connect with Me</Card.Title>
              <Card.Text>
                I’d love to connect and share ideas! Feel free to reach out on
                any of these platforms:
              </Card.Text>
              <div className="d-flex flex-wrap justify-content-center mt-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2"
                  >
                    <div className="d-flex align-items-center border rounded p-2">
                      {link.icon}
                      <span className="ms-2">{link.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialLinks;
