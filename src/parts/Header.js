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
            <Nav.Link className="custom-link" href="/abra.co.id">
              About
            </Nav.Link>
            <Nav.Link className="custom-link" href="/abra.co.id/#portfolio">
              Portfolio
            </Nav.Link>
            <NavDropdown className="nav-dropdown" title="More" id="basic-nav-dropdown">
              <NavDropdown.Item iclassName="custom-link" href="/abra.co.id/more#ourteam">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="/abra.co.id/more#vision">
                Our Values
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-link" href="/abra.co.id/more#ourpartners">
                Our Partners
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="custom-link" href="/abra.co.id/more#contactus">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
