import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BiUser } from "react-icons/bi";

interface User {
  name: string;
}
function AvatarDropdown() {
  const [user] = useState<User>({ name: "vo lam" });
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-avatar"
        className="no-arrow-dropdown"
      >
        {user ? (
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="User Avatar"
            width="40"
            height="40"
            className="rounded-circle"
          />
        ) : (
          <BiUser />
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu align={"end"}>
        <Dropdown.Header>User Info</Dropdown.Header>
        <Dropdown.Item href="#">Profile</Dropdown.Item>
        <Dropdown.Item href="#">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Actions</Dropdown.Header>
        <Dropdown.Item href="#">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AvatarDropdown;
