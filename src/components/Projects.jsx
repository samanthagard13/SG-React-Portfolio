import React from "react";
import { Container, Carousel } from "react-bootstrap";

function Projects() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
    <Carousel>
      <Carousel.Item href="https://github.com/samanthagard13/tech-blog">
        <img src="/images/tech-screenshot.png" text="Find It"></img>
        <Carousel.Caption>
          <h3>Tech Blog</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item href="https://github.com/samanthagard13/Weather-Where-You-Are">
        <img src="/images/weather-site.png" text="Find It"></img>
        <Carousel.Caption>
          <h3>Tech Blog</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
  );
}

export default Projects;