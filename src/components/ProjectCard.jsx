import { Card, Container, Ratio } from "react-bootstrap";

const ProjectCard = ({ link, title, text }) => {
  return (
    <Container>
      <Card style={{ width: "100%" }}>
        <Ratio aspectRatio={"16x9"}>
          <iframe src={link}></iframe>
        </Ratio>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectCard;
