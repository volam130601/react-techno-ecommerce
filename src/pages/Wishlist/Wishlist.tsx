import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "../../components";

const Wishlist = () => {
  return (
    <>
      <Container>
        <Row className="section-content align-items-center mx-0 mt-5">
          <Col className="title p-0 me-auto">
            <h5 className="m-0">Wishlist (4)</h5>
          </Col>
          <Col md={3} className="d-flex justify-content-end pe-0">
            <Button variant="outline-secondary px-4 py-2">
              Move All To Bag
            </Button>
          </Col>
        </Row>
        <Row className="my-5">
          <div className="b-custom-card d-flex justify-content-between">
            <Card isRemoveCard={true} />
            <Card isRemoveCard={true} />
            <Card isRemoveCard={true} />
            <Card isRemoveCard={true} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Wishlist;
