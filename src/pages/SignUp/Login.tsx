import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../../components";
import { FormLogin } from "./components";
const Login = () => {
  return (
    <>
      <Container fluid className="my-5">
        <Row className="d-flex align-items-center ">
          <Col className="ps-0">
            <img
              src="https://co-well.vn/wp-content/uploads/2019/12/why-ecommerce-is-important-with-business.png"
              alt=""
            />
          </Col>
          <Col className="mx-5">
            <FormLogin />
          </Col>
        </Row>
      </Container>
      <Footer isListIcon={false} />
    </>
  );
};

export default Login;
