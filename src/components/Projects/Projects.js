import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image from "../../Assets/Projects/image-gen.png";
import hospital from "../../Assets/Projects/hospital.png";
import content from "../../Assets/Projects/ai-content.png";
import Weather from "../../Assets/Projects/weather.png";
import school from "../../Assets/Projects/school.PNG";
import w3schools from "../../Assets/Projects/w3schools.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="EduSmart"
              description="School Management System is a comprehensive web-based
              platform designed to streamline the management of educational
              institutions. It offers features such as class organization, student
              attendance tracking, grade reporting, data visualization through
              tables and charts, and facilitates effective communication"
              ghLink="https://github.com/ArshnoorKaur21/Edutopia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="E-Weather"
              description="A MERN stack-based Weather App that allows users to search
              for and display current weather information of various cities. It
              features a Node.js/Express backend with API integration and a
              React frontend for a seamless user experience."
              ghLink="https://github.com/ArshnoorKaur21/mern-weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w3schools}
              isBlog={false}
              title="H3 Schools"
              description="Content Management System allows users to access an
              extensive library of tutorials, examples, and resources for
              HTML,CSS,JS and more."
              ghLink="https://github.com/ArshnoorKaur21/H3-Schools"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Healthcare IT System"
              description="I developed a comprehensive Hospital Management System using the MERN stack (MongoDB, Express.js, React, Node.js). The system integrates patient management, appointment scheduling, staff administration, and medical record keeping into a seamless platform. I implemented user authentication and authorization using JWT, and ensured data integrity with Mongoose schemas."
              ghLink="https://github.com/ArshnoorKaur21/Hospital_management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Smart Image Generator"
              description="I created a Smart Image Generator using the MERN stack (MongoDB, Express.js, React, Node.js). I developed a responsive React interface for real-time image generation and editing, and a robust backend with Node.js and Express for efficient image processing and storage. This project demonstrates my full-stack development skills and AI integration expertise."
              ghLink="https://github.com/ArshnoorKaur21/mern_image_generation"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={content}
              isBlog={false}
              title="Digital Content Generator"
              description="I built a Digital Content Generator using the MERN stack. This project leverages AI to automatically generate high-quality written content based on user inputs. I developed a responsive React interface for seamless user interaction and an efficient backend with Node.js and Express for content processing and storage. This project showcases my skills in full-stack development and AI-driven content creation."
              ghLink="https://github.com/ArshnoorKaur21/Ai_ContentGenerator"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
