import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe() {
  return (
    <Container className="text-center about">
      <Row>
        <Col xs lg="6">
          <Image
            src="/images/new-photo.jpg"
            alt="Photo"
            rounded
          />
        </Col>
        <Col xs lg="6">
          <p style={{margin: "2em"}}>
            Transitioning from the restaurant industry to full-stack
            development, I've decided to explore a new path that allows me to
            integrate my passion for design and art with the endless world of
            technology. Using the skills I've accumulated in my Full-Stack
            Coding Certification to continue creating beautiful and productive
            websites. My experiences have allowed me to develop essential skills
            such as teamwork, adaptability, and customer service. These
            attributes are now driving my transition into the world of
            technology, coding, and creative problem-solving.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
