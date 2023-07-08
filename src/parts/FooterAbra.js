import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterAbra() {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About ABRA</h5>
            <p>ABRA (PT Agung Berkah Rejeki Abadi) is an advertising company based in Jakarta, Indonesia. We specialize in providing advertising and publishing services for various industries.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/abra.co.id">Home</a>
              </li>
              <li>
                <a href="/abra.co.id/#aboutus">About</a>
              </li>
              <li>
                <a href="/abra.co.id/more/#services">Services</a>
              </li>
              <li>
                <a href="/abra.co.id/more/#contactus">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Jakarta Timur</li>
              <li>Email: abra88.media@gmail.com</li>
              <li>Phone: +62 881-9983-734</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} ABRA. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
