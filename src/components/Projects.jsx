import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";

function Projects() {
  return (
    <Container className="d-flex justify-content-center align-items-center carousel">
    <Carousel>
      <Carousel.Item>
        <img src="/images/tech-screenshot.png"></img>
        <Carousel.Caption>
          <a href="https://github.com/samanthagard13/tech-blog" target="_blank" className="project-link">Tech Blog</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/images/weather-site.png"></img>
        <Carousel.Caption>
          <a href="https://github.com/samanthagard13/Weather-Where-You-Are" target="_blank" className="project-link">Weather Where You Are</a>
        </Carousel.Caption>
      </Carousel.Item>
e
      <Carousel.Item>
        <img src="/images/Headline-screenshot.png"></img>
        <Carousel.Caption>
          <a  href="https://github.com/eddyK15501/headline-report" target="_blank" className="project-link">Headline Report</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/images/react-example.png"></img>
        <Carousel.Caption>
          <a href="https://github.com/samanthagard13/example-portfolio" target="_blank" className="project-link">Example React Portfolio</a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
  );
}

export default Projects;