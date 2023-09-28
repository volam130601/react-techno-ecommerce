import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

import { Breadcrumbs, Button } from "../../components";
import { Sidebar } from "./components";

const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "My Account" },
];

const MyProfile = () => {
  return (
    <div>
      <Container className="p-0">
        <div className="d-flex">
          <Breadcrumbs data={ListBreadcrumbs} />
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ width: "400px" }}
          >
            Welcome! <span className="text-danger ms-2 fw-bold">Md Rimel</span>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar link="/account/my-profile" />
          </Col>
          <Col md={8} className="border-0 shadow px-5 py-3">
            <h5 className="text-danger">Edit Your Profile</h5>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <FormControl
                      type="text"
                      className="bg-light"
                      placeholder="Enter First Name"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <FormControl
                      type="text"
                      className="bg-light"
                      placeholder="Enter Last Name"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <FormControl
                      type="email"
                      className="bg-light"
                      placeholder="Enter Email"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <FormControl
                      type="text"
                      className="bg-light"
                      placeholder="Enter Address"
                    />
                    <Form.Text className="text-danger fs-7"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formPassword Changes" className="mt-4">
                <Form.Label>Password Changes</Form.Label>
                <FormControl
                  type="text"
                  className="bg-light"
                  placeholder="Current Password"
                />
                <Form.Text className="text-danger fs-7"></Form.Text>
                <FormControl
                  type="text"
                  className="bg-light mt-3"
                  placeholder="New Password"
                />
                <Form.Text className="text-danger fs-7"></Form.Text>
                <FormControl
                  type="text"
                  className="bg-light mt-3"
                  placeholder="Confirm New Password"
                />
                <Form.Text className="text-danger fs-7"></Form.Text>
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end mt-4">
              <div className="me-3">
                <Button title="Cancel" isTextButton />
              </div>
              <Button title="Save Changes" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
