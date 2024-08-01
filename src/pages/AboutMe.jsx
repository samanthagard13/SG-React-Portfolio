import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <NavBar />
      <Container className="text-center" fluid>

      <Image src="/images/hey.png" className="mt-3 mb-3" />

        <Row className="mx-auto page">
          <Col
            xs={12}
            md={12}
            lg={6}
          >
            <p className="about-p">
              With a Full Stack Coding Certificate from the University of North
              Carolina, I’ve honed strong skills in problem-solving, teamwork,
              and adaptability, all of which are crucial in tech. My background
              spans both front-end and back-end technologies, and I’m passionate
              about blending design and art with coding. I’m focused on creating
              innovative and user-friendly solutions and eager to make a
              meaningful impact in the continuously changing world of tech.
            </p>
          </Col>

          <Col
            xs={12}
            md={12}
            lg={5}
          >
            <div>
              <h2>Technical Skills</h2>
              <p className="p-4">
                HTML | CSS | JavaScript | Handlebars | Bootstrap | API | MySQL |
                Express | jQuery | Node.js | React
              </p>

              <h2>Proficient In</h2>
              <p className="p-4">
                GitHub | Git | Figma | Canva | Shopify | Blender | Godot |
                Aseprite
              </p>
            </div>
          </Col>
        </Row>

        <Footer/>
      </Container>
      
      
    </>
  );
}

export default AboutMe;
