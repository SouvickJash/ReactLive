import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import leftarrow from "../Image/left-arrow.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("edit details", state);
  const [name1, setName] = useState(state.name);
  const [email1, setEmail] = useState(state.email);
  const [address, setAddress] = useState(state.address);
  const [age1, setAge] = useState(state.age);
 

const submitdata1=async(e)=> {
  e.preventDefault();
  console.log("address1",address);
    const obj = {
      address:address,
      name:name1,
      age:age1
    };
    console.log("alldata", obj);
    
   await axios
      .post(`/updatedata/${state.id}`, obj)
      .then((response) => {
        console.log("response", response);
        if (response.data.status === 200) {
          toast.success(response.data.message);
          navigate("/");
          console.log("data",response.data.newdata);
        } else if (response.data.status === 404) {
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  }
  return (
    <>
      {/*  */}

      {/*  */}

      <div class="parent4">
        <div class="child4">
          <NavLink className="nav-link" to="/">
            <caption>
              <img
                src={leftarrow}
                alt=""
                width="40"
                height="40"
                onClick={() => navigate(-1)}
                style={{ marginLeft: 55, marginBottom: -131 }}
              />
            </caption>
          </NavLink>
          <div className="container">
            <h3 className="w-50 mx-auto mt-3" style={{ color: "green" }}>
              Edit Page
            </h3>

            <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
              <div class="form-group text-left">
                Name:
                <input
                  type="text"
                  name="first_name"
                  class="form-control"
                  id="first_name"
                  placeholder="Name"
                  value={name1}
                  defaultValue={state.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="form-group text-left">
                Email:
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  value={email1}
                  defaultValue={state.email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly
                />
              </div>

              <div class="form-group text-left">
                Address:{" "}
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="address"
                  placeholder="Address"
                  value={address}
                  defaultValue={state.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="form-group text-left">
                Age:{" "}
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="email"
                  placeholder="Age"
                  value={age1}
                  defaultValue={state.age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  class="btn form-control btn-sm btn-primary"
                  onClick={submitdata1}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div class='child'>child 2</div> */}
      </div>
    </>
  );
};

export default EditPage;
