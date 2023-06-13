import React from "react";
import { Carousel, Col, Row, Container, Card, Image } from "react-bootstrap";

export default function OurClient() {
  return (
    <Container>
      <Row>
        <Container class="container">
          <Row>
            <Col>
              <Container className="ourvalues-abra">
                <h1>Our Client</h1>
                <h6>Thanks for our client!</h6>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row md={1}>
        <Container class="container">
          <Col className="col-ourclient">
            <Container class="ourclient-abra">
              <Carousel>
                <Carousel.Item>
                  <Container className="card-ourclient">
                    <Card>
                      <Image src="https://source.unsplash.com/1200x800/?work" alt="image" rounded fluid></Image>
                      <Card.Body>
                        <Card.Title>Perpamsi</Card.Title>
                        <Card.Text>perpamsi cyang</Card.Text>
                      </Card.Body>
                    </Card>
                  </Container>
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Container>
      </Row>
    </Container>
  );
}
