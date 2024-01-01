import React from "react";
import NavBar from "../components/NavBar";
import Photo from "../components/Photo";
import Skills from "../components/Skills";
import Blurb from "../components/blurb";
import AboutBtn from "../components/About-btn";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import WebBtn from "../components/Web-btn";
import ThreeDBtn from "../components/3D-btn";
import Contact from "../components/Contact-btn";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <NavBar />
      <Container  fluid>
        
        <Row className="m-2">
          <Col xs={12} md={6} lg={3} className="d-flex align-items-center justify-content-center">
            <Photo />
            
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
          <Blurb xs={12} lg={3}/>
          </Col>
          <Col xs={12} md={12} lg={6} className="d-flex align-items-center justify-content-center hover">
            <AboutBtn/>
          </Col>
        </Row>

        <Skills />

        <Row>
          <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center mt-4">
            <WebBtn />
          </Col>
          <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center mt-4">
            <ThreeDBtn/>
          </Col>
          
        </Row>
        <Container className="mt-4">
        <Contact/>
        </Container>
        
      </Container>

      <Footer/>
      
    </>
  );
}

export default Homepage;
