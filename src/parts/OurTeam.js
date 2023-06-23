import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import AgungDwiMarta from "../assets/images/People/People 1.jpg";
import Agung from "../assets/images/People/People 2.jpg";
import BenardineD from "../assets/images/People/People 3.jpg";
import ChandraSunaryo from "../assets/images/People/People 4.jpg";

const memberData = [
  {
    image: ChandraSunaryo,
    name: "Chandra Sunaryo",
    position: "Creative and Marketing Manager",
  },
  {
    image: AgungDwiMarta,
    name: "Agung Dwi Martha",
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
];

export default function OurTeam() {
  return (
    <Container fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <Row className="row-ourteam">
        <Row>
          <Row>
            <Col>
              <Container className="header-section">
                <h1>OUR TEAM</h1>
                <h6>Media and advertising company that helps you enlarge the business</h6>
              </Container>
            </Col>
          </Row>
        </Row>
        {memberData.map((card, idx) => (
          <Col md={4} class="column" key={idx}>
            <Card class="card">
              <Container class="img-container"></Container>
              <h3>{card.name}</h3>
              <p>{card.position}</p>

              <div class="icons">
                <a href="mailto:agungberkahrejekiabadi@gmail.com?subject=Partnership&x-scheme-handler=gmail">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="https://wa.me/0845354543">
                  <i class="fa fa-phone"></i>
                </a>
                <a href="https://www.linkedin.com/company/abra88/">
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
