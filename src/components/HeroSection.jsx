import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import servicenowBanner from '../../src/assets/servicenowBanner.jpg'; // ServiceNow image

export default function HeroSection() {
  return (
    <>
      {/* --- Hero Section with YouTube Video Background --- */}
      <div className="position-relative overflow-hidden" style={{ height: '600px', marginTop: '80px' }}>
        
        {/* YouTube Video Background */}
        <iframe
          className="position-absolute w-100 h-100"
          src="https://www.youtube.com/embed/OBaxynrK1V8?autoplay=1&mute=1&loop=1&playlist=OBaxynrK1V8&controls=0&showinfo=0&modestbranding=1"
          title="KPMG Video"
          frameBorder="0"
          allow="autoplay; muted; loop; encrypted-media"
          allowFullScreen
          style={{ objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }}
        ></iframe>

        {/* Text Overlay */}
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white h-100" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-3 text-shadow">
            M&A made easy
          </h1>
          <h2 className="h1 fw-bold mb-4 text-shadow">
            through AI
          </h2>
          <button className="btn btn-outline-light px-5 py-2 rounded-pill fw-bold">
            Read More →
          </button>
        </div>
      </div>

      {/* --- ServiceNow Innovations Section --- */}
      <div className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h1 className="display-5 fw-bold">KPMG | ServiceNow Innovations Showcase</h1>
              <p className="lead">
                Transforming business through intelligent workflows. Modernizing processes across front, middle, and back offices.
              </p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                src={servicenowBanner}
                alt="ServiceNow Showcase"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}
