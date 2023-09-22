import { Container, Row, Col } from "react-bootstrap";
import { FormSignUp } from "./components";

const SignUp = () => {
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
            <FormSignUp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
