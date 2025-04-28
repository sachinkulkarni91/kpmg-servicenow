import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Solutions() {
  const solutions = [
    { title: 'Front Office Transformation', desc: 'Enhance customer engagement.' },
    { title: 'Middle Office Innovation', desc: 'Streamline operations.' },
    { title: 'Back Office Efficiency', desc: 'Automate core business functions.' }
  ];

  return (
    <section id="solutions" className="py-5">
      <Container>
        <h2 className="mb-5 text-center" data-aos="fade-up">Our Solutions</h2>
        <Row>
          {solutions.map((sol, idx) => (
            <Col key={idx} md={4} className="mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 text-center solution-card p-4">
                <Card.Body>
                  <Card.Title className="fw-bold">{sol.title}</Card.Title>
                  <Card.Text className="text-muted">{sol.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
