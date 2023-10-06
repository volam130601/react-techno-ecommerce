import { Container, Row, Col, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import { AvatarDropdown } from "./components";
import { Product } from "../../entity";

interface HeaderProps {
  cartItems: Product[];
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const NavBarItem = ["Home", "Contact", "About", "Sign-Up"];

  return (
    <>
      {/* Header Top */}
      <Container fluid>
        <Row className="d-flex justify-content-center items-center bg-black text-white">
          <Col xs={3}></Col>
          <Col xs={6}>
            <div className="m-2 d-flex justify-content-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
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
      </Container>

      {/* Header Bottom */}
      <Navbar expand="lg" className="bg-white border-bottom">
        <Container>
          <Col>
            <Navbar.Brand href="#home" className="fw-bold fs-4">
              Exclusive
            </Navbar.Brand>
          </Col>
          <Col md="5">
            <Navbar.Collapse>
              <Nav className="nav-link">
                {NavBarItem.map((item, index) => (
                  <NavLink
                    key={index}
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
          </Col>
          <Col>
            <div className="input-group mx-auto">
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
          </Col>

          <NavLink to={"/wishlist"} className="ms-3 text-black btn-icon">
            <AiOutlineHeart className="fs-4 " />
            <span className="btn-badge">4</span>
          </NavLink>
          <NavLink to={"/cart"} className="mx-3 text-black btn-icon">
            <AiOutlineShoppingCart className="fs-4" />
            {cartItems.length > 0 && (
              <span className="btn-badge ">{cartItems.length}</span>
            )}
          </NavLink>
          <AvatarDropdown />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
