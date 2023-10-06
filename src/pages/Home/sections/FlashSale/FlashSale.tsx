import { Container, Row, Col } from "react-bootstrap";
import "./FlashSale.scss";
import Time from "./Time";
import { Button } from "../../../../components";
import CardSlider from "./CardSlider/CardSlider";
import { CartEntity } from "../../../../entity";

interface FlashSaleProps {
  onAddToCart: (cartItem: CartEntity) => void;
}

const FlashSale: React.FC<FlashSaleProps> = ({ onAddToCart }) => {
  return (
    <>
      <Container>
        <div className="mb-2 d-flex align-items-center text-primary-2 fw-bold">
          <span className="custom-badge"></span>
          Today's
        </div>
        <Row className="section-content align-items-end mx-0">
          <Col md={3} className="title p-0">
            <h1 className="m-0">Flash Sales</h1>
          </Col>
          <Col md={"auto"} className="me-auto">
            <Time />
          </Col>
          <Col md={3}></Col>
        </Row>
        <div className="mt-4"></div>
        <CardSlider onAddToCart={onAddToCart} />
        <div className="d-flex justify-content-center">
          <Button title="View All Products"></Button>
        </div>
      </Container>
    </>
  );
};

export default FlashSale;
