import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Footer } from "../../components";
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
            <h1 className="fs-2">Create an account</h1>
            <h5 className="fs-6">Enter your details below</h5>
            <form action="" className="d-flex flex-column mt-4 ">
              <input
                type="text"
                placeholder="Name"
                className="mt-4 border-0 border-bottom"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="mt-4 border-0 border-bottom"
              />
              <input
                type="text"
                placeholder="Password"
                className="mt-4 border-0 border-bottom"
              />
              <button className="mt-4 py-2 btn btn-danger">
                Create Account
              </button>
              <button className="my-3 py-2  btn btn-outline-secondary d-flex align-items-center justify-content-center">
                <FcGoogle className="me-3" /> Sign up with Google
              </button>
            </form>
            <div className="d-flex justify-content-center">
              Already have account?
              <a href="" className="ms-2 text-black">
                Log in
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer isListIcon={false} />
    </>
  );
};

export default SignUp;
