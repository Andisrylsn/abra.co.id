import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/images/logoabra.png";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact-us" className="bg-light">
      <Container>
        <Row>
          <Col lg={6}>
            <Row>
              <Col>
                <Container className="header-section">
                  <h1>CONTACT US</h1>
                  <h6>Media and advertising company that helps you enlarge the business</h6>
                </Container>
              </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Subject Email</Form.Label>
                <Form.Control type="text" placeholder="Enter your subject email" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col>
            <Image src={logo} alt="logo abra contact us" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
