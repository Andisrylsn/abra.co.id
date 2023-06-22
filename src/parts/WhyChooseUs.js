import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

const cardData = [
  {
    title: "VISION",
    text: "Menjadi perusahaan media advertisement yang profesional dan siap melayani negara dan masyarakat dengan mengutamakan hasil dan kualitas.",
    imageSrc: "",
  },
  {
    title: "MISION",
    text: "Menyediakan layanan, produk, dan solusi sesuai kebutuhan konsumen.",
    imageSrc: "",
  },
  {
    title: "CULTURE",
    text: "ABRA memiliki sikap inovatif dan menjunjung tinggi integritas, teamwork, dan keterbukaan.",
    imageSrc: "",
  },
 
];

export default function WhyChooseUs() {
  return (
    <section id="vision">
      <Container className="choose-us">
        <Row>
          <Col>
          <Row>
          <Col className="text-center">
            <Container className="ourvalues-abra">
              <h1>OUR VALUES</h1>
            </Container>
          </Col>
          </Row>
          </Col>
        </Row>
      
      
        <Container className="card-chooseus">
          <Row xs={1} md={3} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx} >
                <Card className="card-fixed-height"s>

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
