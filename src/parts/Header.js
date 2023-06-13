import React from "react";
import IconText from "./IconText";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <IconText></IconText>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="custom-link" href="#home">
              About
            </Nav.Link>
            <Nav.Link className="custom-link" href="#link">
              Vision
            </Nav.Link>
            <NavDropdown className="nav-dropdown" title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item className="custom-link" href="#action/3.1">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="#action/3.2">
                Our Client
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="#action/3.3">
                Portofolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
