import React from "react";
import { Breadcrumbs, Button } from "../../components";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.scss";

const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "Contact" },
];
const Contact = () => {
  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <Row>
          <Col md={4}>
            <div className="shadow px-4 py-3">
              <div className="d-flex">
                <div className="contact-icon  me-3 bg-danger d-flex justify-content-center align-items-center rounded-circle">
                  <BsTelephone className="  text-light" />
                </div>
                Call To Us
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +84795556872</p>
              <hr />
              <div className="d-flex">
                <div className="contact-icon  me-3 bg-danger d-flex justify-content-center align-items-center rounded-circle">
                  <AiOutlineMail className="  text-light" />
                </div>
                Write To Us
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </Col>
          <Col className="shadow px-4 py-3 ">
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formYourName">
                    <FormControl
                      type="text"
                      className="bg-light border-0"
                      placeholder="Your Name"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formYourMail">
                    <FormControl
                      type="text"
                      className="bg-light border-0"
                      placeholder="Your Mail"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formYourPhone">
                    <FormControl
                      type="text"
                      className="bg-light border-0"
                      placeholder="Your Phone"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Form.Group controlId="exampleTextarea">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    className="bg-light border-0"
                    style={{ resize: "none" }}
                    placeholder="Your Message"
                  />
                </Form.Group>
              </Row>
              <div className="d-flex mt-4 justify-content-end">
                <Button title="Send Message" />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
