import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Events = ({ events }) => (
  <Container className="mt-5">
    {events.map(e => (
      <Row>
        <Col sm={1}>{e.date}</Col>
        <Col sm={3}>{e.category2}</Col>
        <Col sm={8}>{e.description}</Col>
      </Row>
    ))}

  </Container>
);

export default Events;
