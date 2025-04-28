import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../src/assets/KPMG.png'; // Adjust the path as necessary

export default function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#0c233c' }} fixed="top" className="py-3 shadow-sm px-4">
      <Container fluid>
        {/* Left Logo */}
        <Navbar.Brand href="#" style={{ marginLeft: "5rem" }} >
  <img
    src={logo}
    alt="KPMG Logo"
    height="35"
  />
</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        
        <Navbar.Collapse id="navbarScroll">
          {/* Right Links and Button */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="text-white mx-2">Resources</Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">Alumni</Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">Media</Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">Subscribe</Nav.Link>
            <Button style={{ backgroundColor: '#0072CE', borderColor: '#0072CE' }} className="ms-3 px-4">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
