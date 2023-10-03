import React, { ChangeEvent, useState } from "react";
import { Breadcrumbs, Button } from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import "./Product.scss";
import { ColorPicker, SizePicker } from "./components";
import { AiFillStar, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";
import RelatedItem from "./sections/RelatedItem/RelatedItem";

const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "Gaming" },
  { link: "", title: "Havic HV G-92 Gamepad" },
];

const Product = () => {
  const numbers = [1, 2, 3, 4];
  const [quantity, setQuantity] = useState<number>(0);
  const [favoriteProduct, setFavoriteProduct] = useState<boolean>(false);

  const handleQuantityIncrease = (value: number) => {
    value++;
    setQuantity(value);
  };
  const handleQuantityDecrease = (value: number) => {
    if (value != 0) {
      value--;
      setQuantity(value);
    }
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity: number = parseInt(event.target.value);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  const handleFavoriteProduct = (favorite: boolean) => {
    setFavoriteProduct(favorite);
  };
  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <Row className="mb-9">
          <Col md={2}>
            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "600px" }}
            >
              {numbers.map((number) => (
                <div
                  key={number}
                  className="product-img-sub d-flex justify-content-center"
                >
                  <img
                    src={`/src/assets/images/product/0/sony-ps5-dualsense-wireless-controller-${number}.png`}
                    alt={`Gamepad ${number}`}
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col md={5}>
            <div className="product-img-main d-flex justify-content-center">
              <img
                src="/src/assets/images/product/0/sony-ps5-dualsense-wireless-controller-1.png"
                alt="Gamepad 1"
              />
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column justify-content-between">
            <div className="title-container">
              <h4 className="title fw-bold">Title</h4>
            </div>
            <div className="d-flex align-items-center">
              <AiFillStar className="text-warning fs-5" />
              <AiFillStar className="text-warning fs-5" />
              <AiFillStar className="text-warning fs-5" />
              <AiFillStar className="text-warning fs-5" />
              <AiFillStar className="text-secondary-2 fs-5" />
              <div className="text-secondary ms-3">(88 Reviews)</div>
              <div className="mx-3">|</div>
              <div className="text-success">In Stock</div>
            </div>
            <h4 className="mt-3">$192.00</h4>
            <p className="m-0">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr />
            <div className="d-flex">
              <h5 className="me-2">Colors:</h5>
              <ColorPicker />
            </div>
            <div className="d-flex align-items-center mt-3">
              <h5 className="me-2">Size:</h5>
              <SizePicker />
            </div>
            <div className="d-flex mt-3">
              <div className="d-flex me-3">
                <button
                  className="btn-minus"
                  onClick={() => handleQuantityDecrease(quantity)}
                >
                  <AiOutlineMinus />
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  className="quantity fs-4 text-center"
                  onChange={handleQuantityChange}
                />
                <button
                  className="btn-add"
                  onClick={() => handleQuantityIncrease(quantity)}
                >
                  <GrAdd />
                </button>
              </div>
              <Button title="Buy Now" />
              <button
                className={`btn-favorite border ms-3 px-2   ${
                  favoriteProduct == true ? "active" : ""
                }`}
                onClick={() => handleFavoriteProduct(!favoriteProduct)}
              >
                <AiOutlineHeart className="fs-4" />
              </button>
            </div>
            <div className="d-flex border rounded-top  align-items-center py-3 px-4 mt-4">
              <img
                src="/src/assets/icons/car-delivery-fast.png"
                alt="Fast Car Delivery"
                width={50}
                height={50}
              />
              <div className="d-flex flex-column ms-3">
                <h5>Free Delivery</h5>
                <Link to={""} className="fs-7 text-dark">
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>
            <div className="d-flex border rounded-bottom  align-items-center py-3 px-4">
              <BsArrowRepeat className="fs-2" />
              <div className="d-flex flex-column ms-3">
                <h5>Return Delivery</h5>
                <div className="d-flex fs-7 ">
                  Free 30 Days Delivery Returns.
                  <Link to={""} className="text-dark">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <RelatedItem />
      </Container>
    </>
  );
};

export default Product;
