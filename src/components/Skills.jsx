import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function Skills() {
  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  return (
    <Container style={{ margin: "2em" }} className="d-flex justify-content-center align-items-center skills">
      <Row>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("HTML5")}>
            <i className='fab fa-html5'></i>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("CSS3")}>
            <i className='fab fa-css3'></i>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("Bootstrap")}>
            <i className='fab fa-bootstrap'></i>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("JavaScript")}>
            <i className='fab fa-js'></i>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("Node.js")}>
            <i className='fab fa-node-js'></i>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={renderTooltip("SQL")}>
            <i className='fa fa-server'></i>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
