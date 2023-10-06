import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Carousels, FlashSale, Categories } from "./sections";
import "./Home.scss";
import BestSellProduct from "./sections/BestSellProduct/BestSellProduct";
import { FooterListIcon } from "../../components";
import { CartEntity } from "../../entity";

interface HomeProps {
  onAddToCart: (cartItem: CartEntity) => void;
}
const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
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
          <FlashSale onAddToCart={onAddToCart} />
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
