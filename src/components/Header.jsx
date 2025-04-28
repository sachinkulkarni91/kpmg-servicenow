import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../src/assets/KPMG.png'; // Update with your correct path

export default function Header() {
  return (
    <>
      {/* --- Top Dark Navbar --- */}
      <Navbar expand="lg" style={{ backgroundColor: '#0c233c' }} fixed="top" className="py-3 shadow-sm px-4">
        <Container fluid>
          {/* Left Logo */}
          <Navbar.Brand href="#" className="ms-4">
            <img src={logo} alt="KPMG Logo" height="50" />
          </Navbar.Brand>

          {/* Stylish Hamburger Toggle */}
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0">
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </Navbar.Toggle>

          {/* Navbar Links */}
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#resources" className="text-white mx-3 fw-semibold">Resources</Nav.Link>
              <Nav.Link href="#alumni" className="text-white mx-3 fw-semibold">Alumni</Nav.Link>
              <Nav.Link href="#media" className="text-white mx-3 fw-semibold">Media</Nav.Link>
              <Nav.Link href="#subscribe" className="text-white mx-3 fw-semibold">Subscribe</Nav.Link>
              <Button style={{ backgroundColor: '#0072CE', borderColor: '#0072CE' }} className="ms-4 px-4 rounded-pill fw-bold">
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- White Secondary Navbar (Optional Insights Menu) --- */}
      <div className="sticky-top" style={{ top: '80px', zIndex: '1020' }}>
        <div className="bg-white py-3 shadow-sm d-flex justify-content-center gap-5">
          <a href="#insights" className="text-dark fw-medium text-decoration-none hover-underline">Insights</a>
          <a href="#services" className="text-dark fw-medium text-decoration-none hover-underline">Services</a>
          <a href="#industries" className="text-dark fw-medium text-decoration-none hover-underline">Industries</a>
          <a href="#howwework" className="text-dark fw-medium text-decoration-none hover-underline">How We Work</a>
          <a href="#careers" className="text-dark fw-medium text-decoration-none hover-underline">Careers & Culture</a>
        </div>
      </div>
    </>
  );
}
