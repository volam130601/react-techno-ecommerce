import { Container, Row, Col } from "react-bootstrap";
import { BsCarFront } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
const FooterListIcon = () => {
  return (
    <div>
      <Container className="mt-9">
        <Row>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <BsCarFront className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </Col>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <TfiHeadphoneAlt className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">24/7 CUSTOMER SERVICE</h5>
            <p>Friend 24/7 customer support</p>
          </Col>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <LuShieldCheck className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterListIcon;
