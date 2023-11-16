import React from "react";
import { Container, Row, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="text-center">
            <a href="mailto:samantha.gard13@gmail.com">
              <Button className="contact-btn">Send Me A Message!</Button>
            </a>
      </Row>

    </Container>
  );
}

export default Contact;
