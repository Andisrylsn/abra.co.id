import React from "react";
import logoAbra from "../assets/images/logoabra.png";
import { Container, Navbar, Row, Col } from "react-bootstrap";

export default function IconText() {
  return (
    <Container content="fit">
      <Row>
        <Navbar.Brand className="navbar-brand" href="/">
        <Col className="d-flex align-items-center">
        <img class="textNavbarLogo" src={logoAbra} width="40" height="30" className="d-inline-block " alt="logo-abra" />
        <h6 className="ml-2 mb-0">PT. Agung Berkah Rejeki Abadi</h6>
        </Col>
        </Navbar.Brand>
      </Row>
    </Container>
  );
}
