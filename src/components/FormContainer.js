import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justfy-cotent-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
