import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Carousels, FlashSale, Categories } from "./sections";
import "./Home.scss";
import BestSellProduct from "./sections/BestSellProduct/BestSellProduct";
const Home = () => {
  return (
    <>
      <hr />
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
        <hr />
        <Row className="mt-6">Browse By Category</Row>
        <hr />
        <Row className="mt-6">Best Selling Products</Row>
      </Container>
      <div className="m-5">Footer</div>
    </>
  );
};

export default Home;
