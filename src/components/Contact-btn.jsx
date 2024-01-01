import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// add back link route to use contact page

function Contact() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <a href="mailto:samantha.gard13@gmail.com" className="image-link">
        <Image src="/images/contact.png" />
      </a>
    </Container>
  );
}

export default Contact;
