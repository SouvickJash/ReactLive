import React from "react";
import leftarrow from "../Image/left-arrow.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  function submit() {
    // if (name == null || name == "") {
    //   alert("Name can't be blank");
    // }else{
    // }
  }
  return (
    <>
      {/* <div className="formpage">
        <div className="container">
          <h2 className="w-50 mx-auto mt-3" style={{ color: "green" }}>
            Form Page....
          </h2>
    
          <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
            <div class="form-group text-left">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group text-left">
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group text-left">
              <input
                type="phone"
                name="phone"
                class="form-control"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div class="form-group text-left">
               <textarea name="" id="" cols="34" rows="3" placeholder="message">

               </textarea>
            </div>

            <div className="text-left">
              <button
                type="submit"
                class="btn form-control btn-sm btn-primary"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      <div class="parent2">
        <div class="child2">
          <NavLink className="nav-link">
            <caption>
              <img
                src={leftarrow}
                alt=""
                width="40"
                height="40"
                onClick={() => navigate(-1)}
                style={{ marginLeft: 60, marginBottom: -140 }}
              />
            </caption>
          </NavLink>

          <div className="formpage">
            <div className="container">
              <h2 className="w-50 mx-auto mt-3" style={{ color: "green" }}>
                Add user Page....
              </h2>

              <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
                <div class="form-group text-left">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group text-left">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group text-left">
                  <input
                    type="phone"
                    name="phone"
                    class="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                </div>
                <div class="form-group text-left">
                  <textarea
                    name=""
                    id=""
                    cols="38"
                    rows="3"
                    placeholder="message"
                  ></textarea>
                </div>

                <div className="text-left">
                  <button
                    type="submit"
                    class="btn form-control btn-sm btn-primary"
                    onClick={submit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div class='child'>child 2</div> */}
      </div>
    </>
  );
};

export default FormPage;
