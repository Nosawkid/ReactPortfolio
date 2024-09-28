import React from "react";
import { Badge, Button, Card, Stack, Toast } from "react-bootstrap";

const ProjectCard = ({ title, desc, link, level, ap, completed }) => {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          borderRadius: "15px",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          margin: "20px",
          height: "25rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 16px 32px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
        }}
      >
        <div
          className={`bg-${level}`}
          style={{ width: "100%", height: "7rem" }}
        ></div>
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{desc}</Card.Text>
          <Stack direction="horizontal" gap={1}>
            <Badge
              bg={`${level}`}
              className={level === "warning" ? "text-black" : "text-white"}
            >
              {level === "warning"
                ? "Intermediate"
                : level == "success"
                ? "Beginner"
                : ""}
            </Badge>
            {ap && <Badge bg="success">Academic Project</Badge>}
          </Stack>
          <Card.Text className="mt-2">
            Check it out on{" "}
            <Card.Link target="_blank" href={link}>
              Github
            </Card.Link>
          </Card.Text>
          <Badge bg={completed ? "success" : "warning"}>
            {completed ? "Completed" : "Under Development"}
          </Badge>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
