import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <Container style={{margin: "2em"}} className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <i className='fab fa-html5' alt='HTML5'></i>
        </Col>
        <Col>
          <i className='fab fa-css3' alt='CSS3'></i>
        </Col>
        <Col>
          <i className='fab fa-bootstrap' alt='Bootstrap'></i>
        </Col>
        <Col>
          <i className='fab fa-js' alt='JavaScript'></i>
        </Col>
        <Col>
          <i className='fab fa-node-js' alt='Node.js'></i>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
