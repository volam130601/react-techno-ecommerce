import { Container, Row, Col } from "react-bootstrap";
import "./Categories.scss";
import { IconType } from "react-icons";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsPhone, BsCamera } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline, IoGameControllerOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";

interface Category {
  icon: IconType;
  name: string;
}

const categoriesData: Category[] = [
  { icon: BsPhone, name: "Phones" },
  { icon: HiOutlineDesktopComputer, name: "Computers" },
  { icon: IoWatchOutline, name: "SmartWatch" },
  { icon: BsCamera, name: "Camera" },
  { icon: PiHeadphonesLight, name: "Headphones" },
  { icon: IoGameControllerOutline, name: "Gaming" },
];

const Categories = () => {
  return (
    <>
      <Container>
        <div className="mb-2 d-flex align-items-center text-primary-2 fw-bold">
          <span className="custom-badge"></span>
          Categories
        </div>
        <Row className="section-content align-items-end mx-0">
          <Col className="title p-0 me-auto">
            <h1 className="m-0">Browse By Category</h1>
          </Col>

          <Col md={3} className="d-flex justify-content-end slider-arrow">
            <button className="btn-left mx-2">
              <AiOutlineArrowLeft className="fs-5" />
            </button>
            <button className="btn-right">
              <AiOutlineArrowRight className="fs-5" />
            </button>
          </Col>
        </Row>
        <Row className="my-5">
          {categoriesData.map((category, index) => (
            <Col key={index}>
              <div className="card card-category d-flex align-items-center py-5 ">
                <category.icon className="fs-2" />
                <span className="mt-2">{category.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
