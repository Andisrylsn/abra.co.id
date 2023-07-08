import React from "react";
import { Carousel, Col, Row, Container, Card, Image } from "react-bootstrap";
import logoPerpamsi from ".././assets/images/Logo/perpamsi1.png";
import logoPln from ".././assets/images/Logo/logopln.png";

const company = [
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
    <Container id="ourpartners">
      <Row>
        <Container class="container">
          <Row>
            <Col>
              <Container className="header-section">
                <h1>OUR PARTNERS</h1>
                <h6>Media and advertising company that helps you enlarge the business</h6>
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
                        <Image
                          src={comp.logo}
                          alt="image"
                          rounded
                          fluid
                          style={{
                            maxWidth: "600px", // Set the maximum width to 600 pixels
                            maxHeight: "400px", // Set the maximum height to 600 pixels
                            width: "auto", // Allow the width to adjust based on the aspect ratio
                            height: "400px", // Allow the height to adjust based on the aspect ratio
                            objectFit: "contain", //op or scale the image to fit within the specified dimensions
                          }}
                        ></Image>
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
