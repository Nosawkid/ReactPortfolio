import { ListGroup, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const levels = [
    { name: "HTML", level: 90, color: "danger" },
    { name: "CSS", level: 60, color: "info" },
    { name: "JavaScript", level: 80, color: "warning" },
    { name: "Express", level: 40, color: "info" },
    { name: "MongoDB", level: 60, color: "success" },
    { name: "React", level: 30, color: "primary" },
    { name: "Problem Solving", level: 80, color: "primary" },
  ];

  levels.sort((a, b) => b.level - a.level);

  const colors = ["success", "danger", "warning", "info"];

  const random = () => {
    return Math.floor(Math.random() * colors.length);
  };

  return (
    <div>
      <ListGroup>
        {levels.map((el) => (
          <ListGroup.Item key={el.name}>
            {el.name}{" "}
            <ProgressBar
              striped
              now={el.level}
              label={`${el.level}%`}
              variant={el.color}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Skills;
