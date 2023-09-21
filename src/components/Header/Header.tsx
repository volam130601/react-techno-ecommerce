import { Container, Row, Col, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

function Header() {
  const NavBarItem = ["Home", "Contact", "About", "Sign-Up"];

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
          <div className="input-group" style={{ width: "300px" }}>
            <input
              className="form-control border-end-0 border bg-light"
              type="search"
              id="example-search-input"
              placeholder="What are looking for?"
            />
            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary border-start-0 border rounded-0 rounded-end bg-light"
                type="button"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
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
