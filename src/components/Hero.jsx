import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col className="text-center" sm={12} md={8}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            <div className="mt-5">
              {props.subTitle && (
                <h3 className="display-4 font-weight-light">
                  {props.subTitle}
                </h3>
              )}
            </div>

            <div className="mt-5">
              {props.text && (
                <h3 className="lead font-weight-light">{props.text}</h3>
              )}
              {props.gitHub && (
                <div>
                  <a
                    className="btn btn-info"
                    target="_blank"
                    href="https://github.com/MichaelBlumMichael"
                  >
                    {props.gitHub}
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
