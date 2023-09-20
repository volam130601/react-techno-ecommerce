import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCarFront, BsSnapchat } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineSend, AiFillApple } from "react-icons/ai";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <Container className="my-6">
        <Row>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <BsCarFront className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </Col>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <TfiHeadphoneAlt className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">24/7 CUSTOMER SERVICE</h5>
            <p>Friend 24/7 customer support</p>
          </Col>
          <Col className="d-flex align-items-center flex-column">
            <div className="footer-icon">
              <LuShieldCheck className="fs-3" />
            </div>
            <h5 className="fw-bold mt-4 mb-2">MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="bg-dark text-white mt-5"
        style={{ height: "500px" }}
      >
        <Row className="p-5">
          <Col>
            <div className="fs-4 fw-bold mb-3">Exclusive</div>
            <div className="fs-6">Subscribe</div>
            <div className="fs-7 mt-3">Get 10% off your first order</div>
            <div className="footer-form mt-2 me-4">
              <input type="text" placeholder="Enter your email" />
              <AiOutlineSend className="icon fs-5" />
            </div>
          </Col>
          <Col>
            <div className="fs-4 fw-bold mb-3">Support</div>
            <div className="fs-7 mb-3">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="fs-7 mb-3">exclusive@gmail.com</div>
            <div className="fs-7 mb-3">+88025-88888-9999</div>
          </Col>
          <Col>
            <div className="fs-4 fw-bold mb-3">Account</div>
            <div className="fs-7 mb-3">My Account</div>
            <div className="fs-7 mb-3">Login / Register</div>
            <div className="fs-7 mb-3">Cart</div>
            <div className="fs-7 mb-3">Wishlist</div>
            <div className="fs-7 mb-3">Shop</div>
          </Col>
          <Col>
            <div className="fs-4 fw-bold mb-3">Quick Link</div>
            <div className="fs-7 mb-3">Privacy Policy</div>
            <div className="fs-7 mb-3">Terms Of Use</div>
            <div className="fs-7 mb-3">FAQ</div>
            <div className="fs-7 mb-3">Contact</div>
          </Col>
          <Col>
            <div className="fs-4 fw-bold mb-3">Download App</div>
            <div className="fs-7 mb-3 text-secondary">
              Save S3 with App New User Only
            </div>
            <div className="d-flex align-items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRmCS1UF8zZm7to0ULVATi9Ahht1iSPSG8AXxxLd52w&s"
                alt="QR Code"
                width={130}
                height={130}
              />
              <div className="btn-link-app ms-2">
                <button className="google-play text-white d-flex align-items-center px-2 py-1 border rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Play_2022_icon.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <div className="d-flex flex-column ms-1 ">
                    <div className="fs-8 me-auto">GET IT ON</div>
                    <div className="fs-7 me-auto">Google Play</div>
                  </div>
                </button>
                <button className="google-play text-white d-flex align-items-center ps-1 py-1 border rounded mt-2">
                  <AiFillApple className="text-white fs-2 m" />

                  <div className="d-flex flex-column ms-1 ">
                    <div className="fs-8 me-auto">Download on the</div>
                    <div className="fs-7 me-auto">App Store</div>
                  </div>
                </button>
                <div className="app-store"></div>
              </div>
            </div>
            <Col className="d-flex justify-content-around mt-3 align-items-center">
              <FaFacebookF className="fs-4" />
              <BsSnapchat className="fs-4" />
              <CiTwitter className="fs-4" />
              <BiLogoLinkedin className="fs-4" />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
