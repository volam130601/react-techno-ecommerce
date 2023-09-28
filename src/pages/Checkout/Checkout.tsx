import React, { useState } from "react";
import { Breadcrumbs, Button } from "../../components";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

const ListBreadcrumbs = [
  { link: "/account", title: "Account" },
  { link: "/product", title: "Product" },
  { link: "/view-cart", title: "View Cart" },
  { link: "", title: "CheckOut" },
];

const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <h3>Billing Details</h3>
        <Row className="mt-4">
          <Col>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label className="text-secondary">
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formCompanyName" className="mt-4">
                <Form.Label className="text-secondary">
                  Company Name <span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formStreetAddress" className="mt-4">
                <Form.Label className="text-secondary">
                  Street Address <span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formApartment" className="mt-4">
                <Form.Label className="text-secondary">
                  Apartment, floor, etc. (optional)
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formTownCity" className="mt-4">
                <Form.Label className="text-secondary">
                  Town/City <span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formPhoneNumber" className="mt-4">
                <Form.Label className="text-secondary">
                  Phone Number<span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="text" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formEmailAddress" className="mt-4">
                <Form.Label className="text-secondary">
                  Email Address<span className="text-danger">*</span>
                </Form.Label>
                <FormControl type="email" className="bg-light" />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
              <Form.Check
                type="checkbox"
                label="Save this information for faster check-out next time"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mt-4"
              />
            </Form>
          </Col>
          <Col md={1}></Col>
          <Col>
            <div className="d-flex mt-4 align-items-center fw-bold">
              <img
                src="https://images.philips.com/is/image/PhilipsConsumer/243B1_00-IMS-en_GB?$jpglarge$&wid=960"
                alt=""
                width={70}
                height={70}
                className="me-3"
              />
              LCD Monitor
              <span className="ms-auto">$650</span>
            </div>
            <div className="d-flex mt-4 align-items-center fw-bold">
              <img
                src="https://images.philips.com/is/image/PhilipsConsumer/243B1_00-IMS-en_GB?$jpglarge$&wid=960"
                alt=""
                width={70}
                height={70}
                className="me-3"
              />
              H1 Gamepad
              <span className="ms-auto">$1100</span>
            </div>
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

            <Form>
              <div className="d-flex align-items-center mb-3">
                <Form.Check
                  type="radio"
                  id="option1"
                  label="Bank"
                  checked={selectedOption === "option1"}
                  onChange={handleRadioChange}
                  className=""
                />
                <div className="d-flex ms-auto align-items-center">
                  <img
                    src="https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png"
                    alt=""
                    height={50}
                    className="me-1"
                  />
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png"
                    alt=""
                    height={50}
                    className="me-1"
                  />
                  <img
                    src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1225-3kb6axel.png"
                    alt=""
                    height={30}
                    className="me-1"
                  />
                </div>
              </div>

              <Form.Check
                type="radio"
                id="option2"
                label="Cash on delivery"
                checked={selectedOption === "option2"}
                onChange={handleRadioChange}
              />
            </Form>
            <Form className="d-flex mt-3">
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
            <div className="mt-4">
              <Button title="Place Order" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
