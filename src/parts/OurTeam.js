import React from "react";
import { Image, Container, Col, Row, Card } from "react-bootstrap";
import AgungDwiMarta from "../assets/images/People/People 1.jpg";
import Agung from "../assets/images/People/People 2.jpg";
import BenardineD from "../assets/images/People/People 3.jpg";
import ChandraSunaryo from "../assets/images/People/People 4.jpg";

const memberData = [
  {
    image: AgungDwiMarta,
    name: "Agung Dwi Marta",
    position: "Project Manager",
  },
  {
    image: Agung,
    name: "Agung",
    position: "Operations Manager",
  },
  {
    image: BenardineD,
    name: "Benardine D. P.",
    position: "Director",
  },
  {
    image: ChandraSunaryo,
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

              <a class="btn btn-primary" role="button" href="#!">
                <i class="fas fa-envelope"></i>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
