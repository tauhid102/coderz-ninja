import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="sticky">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase">Coderz Ninja</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold" href="#home">Home</Nav.Link>
              <Nav.Link className="fw-bold"  href="#service">Service</Nav.Link>
              <Nav.Link className="fw-bold"  href="#about">About</Nav.Link>
              <Nav.Link className="fw-bold"  href="#team">Team</Nav.Link>
              <Nav.Link className="fw-bold"  href="#career">Career</Nav.Link>
              <Nav.Link className="fw-bold"  href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
