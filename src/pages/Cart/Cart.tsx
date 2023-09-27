import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
const Cart = () => {
  return (
    <>
      <Container className="my-5">
        <div className="d-flex">
          <div className="">Home</div>
          <div className="mx-2">/</div>
          <div className="fw-bold">Cart</div>
        </div>
      </Container>
      <Container>
        <Row className="p-3 border shadow-sm fw-bold">
          <Col md={4}>Product</Col>
          <Col md={3}>Price</Col>
          <Col md={2}>Quantity</Col>
          <Col md={3} className="d-flex justify-content-end">
            Subtotal
          </Col>
        </Row>
        <Row className="p-3 border shadow-sm mt-3">
          <Col md={4}>
            <img
              src="https://images.philips.com/is/image/PhilipsConsumer/243B1_00-IMS-en_GB?$jpglarge$&wid=960"
              alt=""
              width={70}
              height={70}
              className="me-2"
            />
            LCD Monitor
          </Col>
          <Col md={3}>$650</Col>
          <Col md={2}>
            <Form className="">
              <Form.Group controlId="quantity">
                <Form.Control type="number" placeholder="Enter quantity" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={3} className="d-flex justify-content-end">
            Subtotal
          </Col>
        </Row>
        <Row className="p-3 border shadow-sm mt-3">
          <Col md={4}>
            <img
              src="https://images.philips.com/is/image/PhilipsConsumer/243B1_00-IMS-en_GB?$jpglarge$&wid=960"
              alt=""
              width={70}
              height={70}
              className="me-2"
            />
            LCD Monitor
          </Col>
          <Col md={3}>$650</Col>
          <Col md={2}>
            <Form className="">
              <Form.Group controlId="quantity">
                <Form.Control type="number" placeholder="Enter quantity" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={3} className="d-flex justify-content-end">
            Subtotal
          </Col>
        </Row>
        <Row className="mt-3">
          <Col me={"auto"} className="p-0">
            <Button
              variant="outline-secondary"
              className="px-5 py-2 text-black fw-bold"
            >
              Rerun To Shop
            </Button>
          </Col>
          <Col className="d-flex justify-content-end p-0">
            <Button
              variant="outline-secondary"
              className="px-5 py-2 text-black fw-bold"
            >
              Update Cart
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <Row className="p-0">
          <Col className="p-0">
            <Row>
              <Form className="d-flex">
                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  className="me-2 w-100"
                >
                  <FormControl
                    type="text"
                    placeholder="Coupon Code "
                    className="py-2"
                  />
                </Form.Group>
                <Button
                  className="bg-primary-2 border-0 fs-6 py-2"
                  style={{ width: "380px" }}
                  type="submit"
                >
                  Apply Coupon
                </Button>
              </Form>
            </Row>
          </Col>
          <Col md={2}></Col>
          <Col className="border border-dark border-3 rounded  p-4">
            <h5>Cart Total</h5>
            <div className="d-flex border-bottom  pb-3 mt-4">
              <div className="">Subtotal:</div>
              <b className="ms-auto">$1750</b>
            </div>
            <div className="d-flex border-bottom  pb-3 mt-4">
              <div className="">Shipping:</div>
              <b className="ms-auto">Free</b>
            </div>
            <div className="d-flex pb-3 mt-4">
              <div className="">Total:</div>
              <b className="ms-auto">$1750</b>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Button className="border-0 bg-primary-2 py-2 px-5">
                Process to checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;