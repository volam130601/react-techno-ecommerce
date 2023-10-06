import React from "react";
import { Container, Row } from "react-bootstrap";
import { Card } from "../../../../components";

const RelatedItem = () => {
  return (
    <Container>
      <div className="mb-2 d-flex align-items-center text-primary-2 fw-bold">
        <span className="custom-badge"></span>
        Related Item
      </div>
      <Row className="my-5">
        <div className="b-custom-card d-flex justify-content-between">
          <Card link={`/product/0`} title="Title 1" />
          <Card link={`/product/0`} title="Title 1" />
          <Card link={`/product/0`} title="Title 1" />
          <Card link={`/product/0`} title="Title 1" />
        </div>
      </Row>
    </Container>
  );
};

export default RelatedItem;
