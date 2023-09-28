import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
interface SidebarProps {
  link?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ link = "/account/my-profile" }) => {
  return (
    <div>
      <div className="fs-6 fw-bold">Manage My Account</div>
      <ul className="sub-nav-list">
        <Link to={"/account/my-profile"}>
          <li
            className={`text-secondary ${
              link == "/account/my-profile" ? "active" : ""
            }`}
          >
            My Profile
          </li>
        </Link>
        <Link to={"/account/address-book"}>
          <li
            className={`text-secondary ${
              link == "/account/address-book" ? "active" : ""
            }`}
          >
            Address Book
          </li>
        </Link>
        <li className="text-secondary ">My payment Options</li>
      </ul>
      <div className="fs-6 fw-bold">My Orders</div>
      <ul className="sub-nav-list">
        <li className=" text-secondary ">My Returns</li>
        <li className=" text-secondary ">My Cancellations</li>
      </ul>
      <div className="fs-6 fw-bold">My Wishlist</div>
    </div>
  );
};

export default Sidebar;
