import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function AboutMe() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "2em" }} className="text-center" fluid>
        <Row>
        <Col xl={6}>
            <Image src="/images/IMG_3577.jpg" className="about-pic" rounded />
          </Col>
        <Col xl={6}>
            <p style={{ margin: "2em", padding: "2em" }} className="about-p">
              Transitioning from the restaurant industry to full-stack
              development, I've decided to explore a path that allows me to
              integrate my passion for design and art with the endless world of
              technology. Using the skills I've accumulated in my Full-Stack
              Coding Certification to continue creating beautiful and productive
              websites. My experiences in life have allowed me to develop
              essential skills such as teamwork, adaptability, and customer
              service. These attributes are now driving my transition into the
              world of technology, coding, and creative problem-solving.
            </p>
          </Col>
          
          
        </Row>
        <Row style={{ marginTop: "2em" }} >
          <Col xl={6}>
            <h2>Technical Skills</h2>
            
            <p style={{ margin: "2em", padding: "1em" }}>HTML | CSS | JavaScript | Handlebars | Bootstrap | API | MySql | Express | jQuery | Node.js | React </p>
          </Col>
          <Col xl={6}>
            <h2>Proficient In</h2>

            <p style={{ margin: "2em", padding: "1em" }}>Github | Git | Figma | Canva | Shopify | Blender | Godot | Aseprite</p>
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
}

export default AboutMe;
