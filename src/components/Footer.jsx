import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container>
        <Nav className="d-flex align-items-center justify-content-center">
          <Nav.Link
          className="footer-icon"
            target="_blank"
            href="https://github.com/samanthagard13"
          >
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link
          className="footer-icon"
            target="_blank"
            href="https://www.linkedin.com/in/samantha-gard-47599b269"
          >
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link
          className="footer-icon"
            target="_blank"
            href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing"
          >
            <i className="fa-solid fa-file"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </>
  );
}

export default Footer;
