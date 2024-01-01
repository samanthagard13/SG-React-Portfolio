import React from "react";
import NavBar from "../components/NavBar";
import Photo from "../components/Photo";
import { Container, Row, Col, Image } from "react-bootstrap";
import Contact from "../components/Contact-btn";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
    <NavBar/>
    <Container style={{ marginTop: "2em" }} className="text-center" fluid>
    <Image src="/images/hey.png" className="hey"/>
  
          <p style={{ margin: "1em", padding: "2em"}}>
            Transitioning from the restaurant industry to full-stack
            development, I've decided to explore a path that allows me to
            integrate my passion for design and art with the endless world of
            technology. Using the skills I've accumulated in my Full-Stack
            Coding Certification to continue creating beautiful and productive
            websites. My experiences in life have allowed me to develop essential skills
            such as teamwork, adaptability, and customer service. These
            attributes are now driving my transition into the world of
            technology, coding, and creative problem-solving.
          </p>

        <Photo/>

        {/* <Row>
          <Col>
          <Photo/>
          </Col>
          <Col className="mt-5">
          <Contact/>
          </Col>
        </Row> */}
        
        <Footer/>
        
    </Container>
    </>
  );
}

export default AboutMe;
