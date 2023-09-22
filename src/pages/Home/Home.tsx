import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Carousels, FlashSale, Categories } from "./sections";
import "./Home.scss";
import BestSellProduct from "./sections/BestSellProduct/BestSellProduct";
import { FooterListIcon } from "../../components";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <Carousels />
          </Col>
        </Row>
        <Row className="mt-6">
          <FlashSale />
        </Row>
        <Row className="mt-6">
          <Categories />
        </Row>
        <Row className="mt-6">
          <BestSellProduct />
        </Row>
      </Container>
      <FooterListIcon />
    </>
  );
};

export default Home;
