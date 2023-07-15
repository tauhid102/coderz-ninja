import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Image/logo.png";
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position > 0) {
        setNavbarColor('#f8f9fa'); // Replace with your desired color
      } else {
        setNavbarColor('transparent');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initialize the isMobile state on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: isMobile ? '#f8f9fa' : (scrollPosition >= 100 ? '#f8f9fa' : navbarColor),
    transition: 'background-color 0.3s ease-in-out',
    zIndex: 999,
    marginBottom: isMobile ? '500px' : 0,
  };
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        // className="fixed-top forMobile"
        style={navbarStyle}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase">
            {" "}
            <img src={logo} /> Coderz Ninja
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#service">
                Service
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#career">
                Career
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
