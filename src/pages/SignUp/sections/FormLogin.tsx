import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <>
      <h1 className="fs-2">Log in to Exclusive</h1>
      <h5 className="fs-6">Enter your details below</h5>
      <form action="" className="d-flex flex-column mt-4 ">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="mt-4 border-0 border-bottom"
        />
        <input
          type="text"
          placeholder="Password"
          className="mt-4 border-0 border-bottom"
        />
        <div className="mt-4 d-flex align-items-center">
          <button className="px-5 py-2 btn btn-danger me-auto">Login</button>
          <Link
            to="/forget-password"
            className="text-danger text-decoration-none"
          >
            Forget Password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
