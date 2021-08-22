import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const MyNavBar = () => (
  <>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MEETME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#services">Services</NavDropdown.Item> */}
              <NavDropdown.Item href="/WebService">
                Web Service
              </NavDropdown.Item>
              <NavDropdown.Item href="/CloudService">
                Cloud Service
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/CyberSecurity">
                Cybersecurity
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default MyNavBar;
