import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top p-3 shadow-lg">
          <Col className="p-0" md={3} sm={12}>
            Michael Blum - {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
