import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container className="footer-container">
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
            href="mailto:samantha.gard13@gmail.com"
          >
            <i className="fa-solid fa-envelope"></i>
          </Nav.Link>

          <Nav.Link
            className="footer-icon"
            target="_blank"
            href="/images/SG.Resume.pdf"
          >
            <i className="fa-solid fa-file"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </>
  );
}

export default Footer;
