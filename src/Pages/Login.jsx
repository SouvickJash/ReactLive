import React from "react";
import { useState } from "react";
import email1 from "../Image/email1.svg";
import view from "../Image/view1.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import leftarrow from "../Image/left-arrow.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const passwordShow = () => {
    setShow(!show);
  };
  return (
    <>
      <NavLink className="nav-link" to="/">
        <caption>
          <img
            src={leftarrow}
            alt=""
            width="40"
            height="40"
            onClick={() => navigate(-1)}
            style={{ marginLeft: 2, marginBottom: -23 }}
          />
        </caption>
      </NavLink>

      <div className="log">
        <form className="login">
          <h1
            style={{
              marginLeft: 6,
              color: "green",
              fontSize: "30px",
              marginTop: 50,
            }}
          >
            Login page
          </h1>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              placeholder="Email address"
            />
            <img
              src={email1}
              alt=""
              width="32"
              height="40"
              style={{ marginTop: -48, marginLeft: 260 }}
            />
            <label className="form-label" htmlFor="form2Example1"></label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type={show ? "text" : "password"}
              id="form2Example2"
              className="form-control"
              placeholder="Enter password"
            />
            <img
              src={view}
              alt=""
              width="30"
              height="40"
              onClick={passwordShow}
              style={{ marginTop: -48, marginLeft: 260 }}
            />
            <label className="form-label" htmlFor="form2Example2"></label>
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="col">
              <a href="#!">Forgot password?</a>{" "}
            </div>
          </div>
          {/* Submit button */}
          <button type="button" className="btn btn-dark btn-block mb-4">
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Don't have account? <Link href="#" to='/contact'>Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github" />
            </button>
          </div>
        </form>
      </div>


      {/*  */}
      
    </>
  );
};

export default Login;
