import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Image/logo.png"
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: scrollPosition >= 100 ? '#f8f9fa' : 'transparent',
    transition: 'background-color 0.3s ease-in-out',
    zIndex: 999,
  };
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" variant="light" className="fixed-top" style={navbarStyle}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase"> <img src={logo}/> Coderz Ninja</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold" href="#home">Home</Nav.Link>
              <Nav.Link className="fw-bold"  href="#service">Service</Nav.Link>
              <Nav.Link className="fw-bold"  href="#about">About</Nav.Link>
              <Nav.Link className="fw-bold"  href="#contact">Contact</Nav.Link>
              <Nav.Link className="fw-bold"  href="#career">Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
