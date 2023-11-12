import Carousel from 'react-bootstrap/Carousel';


function Projects() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/images/homepage.png" text="Find It"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/weather-site.png"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/Screenshot.png"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;