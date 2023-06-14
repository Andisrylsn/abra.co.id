import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Container className="about-us" id="aboutus">
      <Container>
        <Row>
          <Col className="aboutus-container text-center">
            <Container className="aboutus-abra">
              <h2>ABOUT ABRA</h2>
            </Container>
          </Col>

          <Col>
            <Container className="aboutus-text">
              <h6>
                ABRA is an advertising company that specializes in providing comprehensive advertising and publishing services. We have extensive experience in creating exclusive work agenda books, profile books, directories, calendars,
                corporate events, newspapers, and outdoor media.
              </h6>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
