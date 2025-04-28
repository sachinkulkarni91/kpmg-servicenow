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
     
    </>
  );
}
