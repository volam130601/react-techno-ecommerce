import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineStar } from "react-icons/ai";
import { BiLogOut, BiUser } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import "./AvatarDropdown.scss";
import { Link } from "react-router-dom";
interface User {
  name: string;
}
function AvatarDropdown() {
  const [user] = useState<User>();
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-avatar"
        className="no-arrow-dropdown p-0 rounded-circle bg-primary-2 text-white"
      >
        {user ? (
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="User Avatar"
            width="50"
            height="50"
            className="rounded-circle"
          />
        ) : (
          <BiUser className="m-2 fs-4" width="50" height="50" />
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu align={"end"} className="custom-dropdown-menu">
        <Dropdown.Item
          as={Link}
          to="/account/my-profile"
          className="d-flex align-items-center"
        >
          <BiUser />
          <div className="ms-2">Manage My Account</div>
        </Dropdown.Item>
        <Dropdown.Item href="#" className="d-flex align-items-center">
          <BsBoxSeam />
          <div className="ms-2">My Order</div>
        </Dropdown.Item>
        <Dropdown.Item href="#" className="d-flex align-items-center">
          <MdOutlineCancel />
          <div className="ms-2">My Cancellations</div>
        </Dropdown.Item>
        <Dropdown.Item href="#" className="d-flex align-items-center">
          <AiOutlineStar />
          <div className="ms-2">My Reviews</div>
        </Dropdown.Item>
        <Dropdown.Item href="#" className="d-flex align-items-center">
          <BiLogOut />
          <div className="ms-2">Log Out</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AvatarDropdown;
