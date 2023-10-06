import React, { ChangeEvent, useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import "./Cart.scss";
import { Breadcrumbs, Button } from "../../components";
import { Product } from "../../entity";
const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "Cart" },
];

interface CartProps {
  cartItems: Product[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const [itemQuantities, setItemQuantities] = useState<{
    [key: string]: number;
  }>({});

  const handleQuantityChange = (
    productId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setItemQuantities({
      ...itemQuantities,
      [productId]: newQuantity,
    });
  };

  const getSubtotal = (item: Product) => {
    const quantity = itemQuantities[item.id] || 1;
    return item.price * quantity;
  };

  const getTotalSubtotal = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + getSubtotal(item);
    }, 0);
    return total.toFixed(1);
  };

  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <Row className="p-3 border shadow-sm fw-bold">
          <Col md={4}>Product</Col>
          <Col md={3}>Price</Col>
          <Col md={2}>Quantity</Col>
          <Col md={3} className="d-flex justify-content-end">
            Subtotal
          </Col>
        </Row>
        {cartItems &&
          cartItems.map((item, index) => (
            <Row key={index} className="p-3 border shadow-sm mt-3">
              <Col md={4}>
                <img
                  src={`${item.picture}`}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="me-2"
                />
                {item.title}
              </Col>
              <Col md={3}>${item.price}</Col>
              <Col md={2}>
                <Form>
                  <Form.Group controlId={`quantity-${item.id}`}>
                    <Form.Control
                      type="number"
                      placeholder="Enter quantity"
                      value={itemQuantities[item.id] || 1}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleQuantityChange(item.id, e)
                      }
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col md={3} className="d-flex justify-content-end">
                ${getSubtotal(item).toFixed(2)}
              </Col>
            </Row>
          ))}
        <Row className="mt-3">
          <Col md={3} className="p-0">
            <Button title=" Rerun To Shop" isOutline={true} />
          </Col>
          <Col me={"auto"}></Col>
          <Col md={3} className="d-flex justify-content-end p-0">
            <Button title="Update Cart" isOutline={true} />
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

                <Button title="Apply Coupon" />
              </Form>
            </Row>
          </Col>
          <Col md={2}></Col>
          <Col className="border border-dark border-3 rounded  p-4">
            <h5>Cart Total</h5>
            <div className="d-flex border-bottom  pb-3 mt-4">
              <div className="">Subtotal:</div>
              <b className="ms-auto">${getTotalSubtotal()}</b>
            </div>
            <div className="d-flex border-bottom  pb-3 mt-4">
              <div className="">Shipping:</div>
              <b className="ms-auto">Free</b>
            </div>
            <div className="d-flex pb-3 mt-4">
              <div className="">Total:</div>
              <b className="ms-auto">${getTotalSubtotal()}</b>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Button title="Process to checkout" link="/checkout" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
