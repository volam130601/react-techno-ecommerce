import React from "react";
import { Breadcrumbs, FooterListIcon } from "../../components";
import { Container, Row, Col } from "react-bootstrap";

import { IconType } from "react-icons";
import { BsShop } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbPigMoney } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "./About.scss";
const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "About" },
];
interface Category {
  icon: IconType;
  quantity: string;
  name: string;
}

const categoriesData: Category[] = [
  { icon: BsShop, quantity: "10.5k", name: "Sallers active our site" },
  {
    icon: RiMoneyDollarCircleLine,
    quantity: "33k",
    name: "Monthly Product Sale",
  },
  {
    icon: HiOutlineShoppingBag,
    quantity: "45.5k",
    name: "Customer active in our site",
  },
  { icon: TbPigMoney, quantity: "25k", name: "Anual gross sale in our site" },
];

const About = () => {
  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <Row>
          <Col>
            <h1>Our Story</h1>
            <div className="mt-3">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div className="mt-3">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </Col>
          <Col>
            <img
              src="https://img.freepik.com/free-photo/asian-happy-female-woman-girl-holds-colourful-shopping-packages-standing-yellow-background-studio-shot-close-up-portrait-young-beautiful-attractive-girl-smiling-looking-camera-with-bags_609648-3029.jpg"
              alt=""
            />
          </Col>
        </Row>
        <Row className="my-5">
          {categoriesData.map((category, index) => (
            <Col key={index}>
              <div className="card card-category d-flex align-items-center py-5 ">
                <div className="custom-icon">
                  <category.icon className="fs-3" />
                </div>
                <h5 className="fw-bold mt-4 mb-2">{category.quantity}</h5>
                <span className="mt-2">{category.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterListIcon />
    </>
  );
};

export default About;
