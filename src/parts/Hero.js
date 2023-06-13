import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="custome-col">
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100 image-view " src="https://source.unsplash.com/1200x800/?work" alt="First slide" />
              <Carousel.Caption>
                <h3>
                  <ReactTypingEffect speed={100} eraseSpeed={0} text={["Welcome to ABRA!"]} />
                </h3>
                <p>Elevate your advertising game.</p>
                <Button variant="secondary">About Us</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 image-view" src="https://source.unsplash.com/1200x800/?work" alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 image-view" src="https://source.unsplash.com/1200x800/?work" alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
