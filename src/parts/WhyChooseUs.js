import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const cardData = [
  {
    title: "Professional",
    text: "This is the content of card 1.",
    imageSrc: "https://source.unsplash.com/1000x1000/?Professional",
  },
  {
    title: "Integrity",
    text: "This is the content of card 2.",
    imageSrc: "https://source.unsplash.com/1000x1000/?Integrity",
  },
  {
    title: "Team Work",
    text: "This is the content of card 2.",
    imageSrc: "https://source.unsplash.com/1000x1000/?Team Work",
  },
  {
    title: "Transparancy",
    text: "This is the content of card 2.",
    imageSrc: "https://source.unsplash.com/1000x1000/?Transparancy",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="vision">
      <Container className="choose-us">
        <Row>
          <Col>
            <Container className="ourvalues-abra">
              <h1>Our Values</h1>
              <h6>Media and advertising company that helps you enlarge the business</h6>
            </Container>
          </Col>
        </Row>
        <Container className="card-chooseus">
          <Row xs={1} md={2} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx}>
                <Card>
                  <Image src={card.imageSrc} alt="image" rounded fluid></Image>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}
