import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Benefits() {
  return (
    <section id="benefits" className="bg-light py-5">
      <Container>
        <h2 className="mb-5 text-center" data-aos="fade-up">Why Partner with KPMG and ServiceNow?</h2>
        <Row>
          <Col md={6} data-aos="fade-up" data-aos-delay="100">
            <ul>
              <li>Expertise in transformation</li>
              <li>Accelerated value realization</li>
              <li>Seamless workflow integration</li>
            </ul>
          </Col>
          <Col md={6} data-aos="fade-up" data-aos-delay="200">
            <ul>
              <li>Industry-specific solutions</li>
              <li>Scalable technology platform</li>
              <li>Proven client success stories</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
