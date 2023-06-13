import React from "react";
import logoAbra from "../assets/images/logoabra.png";
import { Container, Navbar, Row, Col } from "react-bootstrap";

export default function IconText() {
  return (
    <Container content="fit">
      <Row>
        <Navbar.Brand className="navbar-brand" href="#home">
          <Col className="flex-column align-items-center">
            <img class="textNavbarLogo" src={logoAbra} width="40" height="30" className="d-inline-block " alt="logo-abra"></img>
            <span> PT. Agung Berkah Rejeki Abadi</span>
          </Col>
        </Navbar.Brand>
      </Row>
    </Container>
  );
}
