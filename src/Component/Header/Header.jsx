import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Image/common/logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [isMobile, setIsMobile] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const location = useLocation();
  const careerPath = location.pathname === '/career' ? 'developer' : 'non-developer';

  const showAboutAndServiceMenu = careerPath === 'non-developer';
  console.log(location)
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
    backgroundColor: isMobile ? '#f8f9fa' : (scrollPosition > 0 ? '#f8f9fa' : navbarColor),
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
            <img src={logo} /> <span className="heroFont-color">Coderz Ninja</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/' className="fw-bold btn2 btn-border-underline" href="#home">
                Home
              </Nav.Link>
              {showAboutAndServiceMenu && <Nav.Link className="fw-bold btn2 btn-border-underline" href="#service">
                Service
              </Nav.Link>}
              {showAboutAndServiceMenu && <Nav.Link className="fw-bold btn2 btn-border-underline" href="#about">
                About
              </Nav.Link>}
              {showAboutAndServiceMenu && <Nav.Link className="fw-bold btn2 btn-border-underline" href="#contact">
                Contact
              </Nav.Link>}
              <Nav.Link as={Link} to='/career' className="fw-bold btn2 btn-border-underline" href="#career">
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
