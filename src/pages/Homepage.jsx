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
      <Container fluid>
        <Row className="mx-auto mt-2 mb-2 page">
          <Col
            xs={12}
            md={12}
            lg={5}
            className="d-flex align-items-center justify-content-center"
          >
            <Photo />
          </Col>

          <Col
            xs={12}
            md={12}
            lg={7}
            className="d-flex flex-column align-items-center justify-content-center blurb-card"
          >
            <Blurb />
            <Row className="mx-auto">
              <Col className="d-flex align-items-center justify-content-center">
                <WebBtn />
              </Col>
              {/* <Col className="d-flex align-items-center justify-content-center">
                <ThreeDBtn />
              </Col> */}
            </Row>
          </Col>
        </Row>
        <div className="m-5"></div>
        <Footer/>
      </Container>
      
    </>
  );
}

export default Homepage;
