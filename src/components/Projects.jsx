import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const [cards, setCards] = useState([]);
  const projects = [
    {
      title: "Password Manager",
      description:
        "A simple password manager that securely stores and retrieves passwords encrypted in the database.",
      level: "success",
      link: "https://github.com/Nosawkid/PasswordManager",
      ap: false,
      completed: true,
    },
    {
      title: "Exam-Reg-Portal",
      description:
        "The idea of this site is for students being able to register for an entrance exam in the magical school of Karmana, which is based on India",
      level: "success",
      link: "https://github.com/Nosawkid/Exam-Reg-Portal",
      ap: false,
      completed: false,
    },
    {
      title: "Notes-App",
      description:
        "A simple notes application for users to create, edit, and delete notes.",
      level: "success",
      link: "https://github.com/Nosawkid/Notes-App",
      completed: true,
    },
    {
      title: "Cultiva",
      description:
        "A platform for agricultural enthusiasts to share knowledge and resources.",
      level: "success",
      link: "https://github.com/Nosawkid/cultiva",
      ap: true,
      completed: true,
    },
    {
      title: "Yelp-Camp",
      description:
        "A web application for sharing and discovering campgrounds.Made by following the tutorial by Colt Steele in Udemy",
      level: "success",
      link: "https://github.com/Nosawkid/Yelp-Camp",
      ap: false,
      completed: false,
    },
    {
      title: "planet-weight-npm-package",
      description: "An NPM package to calculate weight on different planets.",
      level: "success",
      link: "https://github.com/Nosawkid/planet-weight-npm-package",
      ap: false,
      completed: true,
    },

    {
      title: "Expense-Tracker",
      description:
        "An application for tracking personal expenses and managing budgets.",
      level: "success",
      link: "https://github.com/Nosawkid/Expense-Tracker",
      ap: false,
      completed: true,
    },
    {
      title: "AirlinesBooking",
      description:
        "A Java-based airline booking platform for users to search and book flights.",
      level: "success",
      link: "https://github.com/Nosawkid/AirlinesBooking",
      ap: false,
      completed: false,
    },
    {
      title: "MovieBooking",
      description:
        "A movie booking application to search for movies and book tickets. Made in Java. It is a command line application",
      level: "success",
      link: "https://github.com/Nosawkid/MovieBooking",
      ap: false,
      completed: false,
    },
    {
      title: "To-do-List",
      description:
        "A simple to-do list application for managing tasks efficiently.",
      level: "success",
      link: "https://github.com/Nosawkid/To-do-List",
    },
    {
      title: "Curiosity",
      description:
        "Curiosity is a full-stack platform built using the MERN stack, where users can buy, learn, and post their own courses. It also features a minimal job portal, offering opportunities for both students and professionals.",
      level: "warning",
      link: "https://github.com/Nosawkid/Curiosity",
      ap: true,
      completed: true,
    },
    {
      title: "FootballLeague",
      description:
        "A project to simulate football league matches and keep track of scores. The project is being made to learn the fundamental concepts of Java and Object Oriented Programming",
      level: "warning",
      link: "https://github.com/Nosawkid/FootballLeague",
      ap: false,
      completed: false,
    },
  ];

  useEffect(() => {
    setCards(projects);
  }, []);

  return (
    <div>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => setCards(projects)}>
            All
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              setCards(projects.filter((el) => el.level === "success"))
            }
          >
            Beginner
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              setCards(projects.filter((el) => el.level === "warning"))
            }
          >
            Intermediate
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              setCards(projects.filter((el) => el.level === "advanced"))
            }
          >
            Advanced
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              setCards(projects.filter((el) => el.completed === true))
            }
          >
            Completed
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              setCards(projects.filter((el) => el.completed !== true))
            }
          >
            Under Development
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() => setCards(projects.filter((el) => el.ap === true))}
          >
            Academic Projects
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          {cards.length === 0 ? (
            <Col md={12}>
              <p>Nothing to show here yet.</p>
            </Col>
          ) : (
            cards.map((el, idx) => (
              <Col md={4} key={idx}>
                <ProjectCard
                  key={el.title}
                  title={el.title}
                  desc={el.description}
                  level={el.level}
                  link={el.link}
                  ap={el.ap}
                  completed={el.completed}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
