import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Slash = () => {
  return <div className="mx-2">/</div>;
};

export interface ListBreadcrumbs {
  link: string;
  title: string;
}

interface BreadcrumbsProps {
  data: ListBreadcrumbs[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data }) => {
  console.log(data);

  return (
    <>
      <Container>
        <div className="d-flex custom-breadcrumbs my-5">
          {data.map((item, index) => (
            <div className="d-flex" key={index}>
              <Link
                to={item.link}
                className={index == data.length - 1 ? "fw-bold text-black" : ""}
              >
                <div className="">{item.title}</div>
              </Link>
              {index < data.length - 1 && <Slash />}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Breadcrumbs;
