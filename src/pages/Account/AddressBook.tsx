import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumbs } from "../../components";
import { Sidebar } from "./components";

const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "My Account" },
];

const AddressBook = () => {
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
            <Sidebar link="/account/address-book" />
          </Col>
          <Col md={8}>Address Book</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddressBook;
