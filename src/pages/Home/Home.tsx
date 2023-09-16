import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Carousels } from "./components";

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
        <Row></Row>
      </Container>
    </>
  );
};

export default Home;
