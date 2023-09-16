import { NavDropdown } from "react-bootstrap";
import "./NavDropdown.scss";

interface CustomNavDropdownProps {
  title: string;
  items: string[];
}

const CustomNavDropdown: React.FC<CustomNavDropdownProps> = ({
  title,
  items,
}) => {
  return (
    <NavDropdown title={title} id="custom-nav-dropdown" align={"end"}>
      {items.map((item, index) => (
        <NavDropdown.Item key={index} className="custom-nav-dropdown-item">
          {item}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default CustomNavDropdown;
