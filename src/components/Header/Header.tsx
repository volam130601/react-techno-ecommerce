import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

function Header() {
  const NavBarItem = ["Home", "Contact", "About", "Sign Up"];

  return (
    <>
      {/* Header Top */}
      <Row className="d-flex justify-content-center items-center bg-black text-white">
        <Col xs={3}></Col>
        <Col xs={6}>
          <div className="m-2 d-flex justify-content-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="" className="fw-bold text-white ps-1">
              ShopNow
            </a>
          </div>
        </Col>
        <Col
          xs={3}
          className="d-flex justify-content-center items-center align-items-center"
        >
          <Dropdown>
            <Dropdown.Toggle
              variant="none"
              className="text-white"
              id="dropdown-basic"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Viet Nam</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {/* Header Bottom */}
      <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Exclusive
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-6 nav-link">
              {NavBarItem.map((item) => (
                <NavLink
                  key={item}
                  to={item == "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "active px-4 mx-1 nav-item"
                      : "px-4 mx-1 nav-item"
                  }
                >
                  {item}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Form>
            <InputGroup>
              <FormControl
                className="py-1 bg-light"
                type="search"
                id="form1"
                placeholder="What are you looking for?
                "
              />
              <InputGroup.Text className="">
                <Button variant="primary" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <Nav.Link className="mx-3">
            <AiOutlineHeart className="fs-4" />
          </Nav.Link>
          <Nav.Link className="mx-3 cart-icon">
            <AiOutlineShoppingCart className="fs-4" />
            <span className="cart-badge">3</span>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
