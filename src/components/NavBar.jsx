import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand style={{marginLeft: "1em"}}>
          <img src="./images/SamanthaG-purple.png" className="logo-img" alt="Samantha Gard"  />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link target="_blank" href="https://github.com/samanthagard13">
              <i className="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link target="_blank" href="https://www.linkedin.com/in/samantha-gard-47599b269">
              <i className="fab fa-linkedin"></i>
            </Nav.Link>
            <Nav.Link className="resume-btn" style={{margin: "2em"}} target="_blank" href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
