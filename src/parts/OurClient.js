import React from "react";
import { Carousel, Col, Row, Container, Card, Image } from "react-bootstrap";
import logoPabsi from "../assets/images/Logo/logopabsi.png";
import logoPerpamsi from ".././assets/images/Logo/logoperpamsi.png";
import logoPln from ".././assets/images/Logo/logopln.png";

const company = [
  {
    logo: logoPabsi,
    name: "Persatuan Angkat Besi, Binaraga, Angkat Berat Seluruh Indonesia",
    desc: " organisasi yang mengurusi dan mengembangkan olahraga angkat besi, bina raga, dan angkat berat di Indonesia.",
  },
  {
    logo: logoPerpamsi,
    name: "Perhimpunan Pekerja Air Minum dan Sanitasi Indonesia",
    desc: "organisasi yang bergerak di bidang air minum dan sanitasi di Indonesia. Tujuan PERPAMSI adalah meningkatkan pelayanan air minum dan sanitasi untuk masyarakat Indonesia.",
  },
  {
    logo: logoPln,
    name: "Perusahaan Listrik Negara",
    desc: "perusahaan yang bergerak di bidang penyediaan listrik di Indonesia. ",
  },
];

export default function OurClient() {
  return (
    <Container id="client">
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
                {company.map((comp, index) => (
                  <Carousel.Item key={index}>
                    <Container className="card-ourclient">
                      <Card>
                        <Image src={comp.logo} alt="image" rounded fluid></Image>
                        <Card.Body>
                          <Card.Title>{comp.name}</Card.Title>
                          <Card.Text>{comp.desc}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Container>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
          </Col>
        </Container>
      </Row>
    </Container>
  );
}
