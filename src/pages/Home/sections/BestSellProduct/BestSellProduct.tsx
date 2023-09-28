import { Container, Row, Col } from "react-bootstrap";
import "./BestSellProduct.scss";
import { CustomCard } from "../../components";
import { Button } from "../../../../components";

const BestSellProduct = () => {
  return (
    <>
      <Container>
        <div className="mb-2 d-flex align-items-center text-primary-2 fw-bold">
          <span className="custom-badge"></span>
          This Month
        </div>
        <Row className="section-content align-items-end mx-0">
          <Col className="title p-0 me-auto">
            <h1 className="m-0"> Best Selling Products</h1>
          </Col>

          <Col md={3} className="d-flex justify-content-end">
            <Button title="View All"></Button>
          </Col>
        </Row>
        <Row className="my-5">
          <div className="b-custom-card d-flex justify-content-between">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BestSellProduct;
