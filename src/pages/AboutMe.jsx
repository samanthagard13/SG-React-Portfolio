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
              As an enthusiastic and newly certified IT professional with a Full
              Stack Coding Certificate from the University of North Carolina, I
              am eager to transition into the dynamic world of technology and
              software development. My journey has honed critical skills such as
              problem-solving, teamwork, adaptability, and customer service, all
              of which are vital in the tech industry. With a strong foundation
              in both front-end and back-end technologies, I aim to blend my
              passion for design and art with the innovative realm of coding and
              technology. My goal is to contribute creatively and technically to
              projects, leveraging my skills to provide effective and
              user-centric solutions in the ever-evolving IT landscape.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "2em" }}>
          <Col xl={6}>
            <h2>Technical Skills</h2>

            <p style={{ margin: "2em", padding: "1em" }}>
              HTML | CSS | JavaScript | Handlebars | Bootstrap | API | MySql |
              Express | jQuery | Node.js | React{" "}
            </p>
          </Col>
          <Col xl={6}>
            <h2>Proficient In</h2>

            <p style={{ margin: "2em", padding: "1em" }}>
              Github | Git | Figma | Canva | Shopify | Blender | Godot |
              Aseprite
            </p>
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
}

export default AboutMe;
