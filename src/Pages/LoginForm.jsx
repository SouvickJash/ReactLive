// import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftarrow from "../Image/left-arrow.svg";
import { NavLink } from "react-router-dom";
import email1 from "../Image/email1.svg";
import view from "../Image/view1.svg";
import { useState } from "react";
var Recaptcha = require("react-recaptcha");

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const passwordShow = () => {
    setShow(!show);
  };

  const submit = () => {};

  // var callback = function () {
  //   console.log("Done!!!!");
  // };

  // specifying verify callback function
  // var verifyCallback = function (response) {
  //   console.log(response);
  // };

  return (
    <>
      <div class="parent3">
        <div class="child3">
          <NavLink className="nav-link" to="/">
            <caption>
              <img
                src={leftarrow}
                alt=""
                width="40"
                height="40"
                onClick={() => navigate(-1)}
                style={{ marginLeft: 40, marginBottom: -150 }}
              />
            </caption>
          </NavLink>
          <div className="container-f11">
            <h2
              className="mx-auto mt-3"
              style={{ marginLeft: 100, color: "green" }}
            >
              Login Page
            </h2>

            <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
              <div class="form-group text-left">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />

                <img
                  src={email1}
                  alt=""
                  width="32"
                  height="35"
                  style={{ marginTop: -65, marginLeft: 262 }}
                />
              </div>
              <div class="form-group text-left">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  // type={show ? "text" : "password"}

                  // const type = show ? "text" : "password";
                />

                <img
                  src={view}
                  alt=""
                  width="30"
                  height="40"
                  onClick={passwordShow}
                  style={{ marginTop: -66, marginLeft: 262 }}
                />
              </div>
              <div class="form-group text-left form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Show Password
                </label>
              </div>
              {/* recaptche */}
              <div className="g-recaptcha" data-sitekey="6Lct6IwUAAAAAORgCTFdJqz3smBVu8JTZPW2R9mn" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"><div style={{width: 304, height: 78}}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lct6IwUAAAAAORgCTFdJqz3smBVu8JTZPW2R9mn&co=aHR0cHM6Ly93ZWJ0aGVtZXouY29tOjQ0Mw..&hl=en&v=QybaJej5brGL8d7EvWmfKMZU&size=normal&cb=mj58891jwp0q" width={304} height={78} role="presentation" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div>
             
              <div className="text-left">
                <button
                  type="submit"
                  class="btn form-control btn-sm btn-primary"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
              <div className="text-center">
                <p>
                  Don't have account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>

  

          </div>
        </div>
      </div>
    </>
  );
}
