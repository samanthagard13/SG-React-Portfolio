import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe() {
  return (
    <Container style={{ marginTop: "2em" }} className="text-center about">
      <Row>
        <Col xs={12} lg={{ span: 7, order: 1 }} className="order-lg-1">
          <p style={{ margin: "1em" }}>
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
        <Col xs={12} lg={{ span: 5, order: 2 }} className="order-lg-2">
          <Image
            className="Photo"
            src="/images/black-white.jpg"
            alt="Photo"
            rounded
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
