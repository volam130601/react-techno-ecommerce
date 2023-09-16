import { Nav } from "react-bootstrap";
import "./Sidebar.scss";
import CustomNavDropdown from "./NavDropdown";

interface Category {
  id: string;
  title: string;
  categories: string[];
  isDropdown: boolean;
}

const services = ["Service 1", "Service 2", "Service 3"];

const categoriesData: Category[] = [
  {
    id: "1",
    title: "Woman's Fashion",
    categories: ["Sub"],
    isDropdown: true,
  },
  {
    id: "2",
    title: "Men's Fashion",
    categories: ["Sub"],
    isDropdown: true,
  },
  {
    id: "3",
    title: "Electronics",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "4",
    title: "Home & Lifestyle",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "5",
    title: "Medicine",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "6",
    title: "Sports & Outdoor",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "7",
    title: "Baby's & Toys",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "8",
    title: "Groceries & Pets",
    categories: ["Sub"],
    isDropdown: false,
  },
  {
    id: "9",
    title: "Health & Beauty",
    categories: ["Sub"],
    isDropdown: false,
  },
];

const Sidebar = () => {
  return (
    <Nav className="flex-column nav border-end">
      {categoriesData.length > 0 &&
        categoriesData.map((category) =>
          category.isDropdown === true ? (
            <CustomNavDropdown
              key={category.id}
              title={category.title}
              items={services}
            />
          ) : (
            <Nav.Link
              key={category.id}
              href={`#${category.id}`}
              className="nav-item"
            >
              {category.title}
            </Nav.Link>
          )
        )}
    </Nav>
  );
};

export default Sidebar;
