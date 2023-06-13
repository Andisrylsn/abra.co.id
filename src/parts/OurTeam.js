import React from "react";
import { Image, Container, Col, Row, Card } from "react-bootstrap";

const memberData = [
  {
    image: "https://source.unsplash.com/1200x800/?work",
    name: "Chandra Sunaryo",
    position: "Creative and Marketing Manager",
  },
];

export default function OurTeam() {
  return (
    <Container className="ourteam-container">
      <Row className="row-ourteam">
        <Row>
          <h3 class="ourteam">Our Team</h3>
        </Row>
        {memberData.map((card, idx) => (
          <Col md={4} class="column" key={idx}>
            <Card class="card">
              <Container class="img-container">
                <Image src={card.image} alt="No Image Found!" fluid />
              </Container>
              <h3>{card.name}</h3>
              <p>{card.position}</p>
              <div class="icons">
                <a class="btn btn-primary" role="button" href="#!">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
