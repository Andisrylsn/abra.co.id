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
            <Nav.Link className="custom-link" href="/">
              About
            </Nav.Link>
            <Nav.Link className="custom-link" href="/#vision">
              Vision
            </Nav.Link>
            <NavDropdown className="nav-dropdown" title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item className="custom-link" href="/services#portfolio">
                Portofolio
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="/services#services">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="/services#client">
                Our Client
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="custom-link" href="/services#contact-us">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
