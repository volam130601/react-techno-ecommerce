import React from "react";
import { Breadcrumbs, Button } from "../../components";
import { Container } from "react-bootstrap";
const ListBreadcrumbs = [
  { link: "/", title: "Home" },
  { link: "", title: "Error 404" },
];
const Error404 = () => {
  return (
    <>
      <Breadcrumbs data={ListBreadcrumbs} />
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 style={{ fontSize: "6rem" }}>404 Not Found</h1>
          <p className="my-5">
            Your visit page not found. You may go home page
          </p>
          <Button title="Back to home page" link="/" />
        </div>
      </Container>
    </>
  );
};

export default Error404;
