import React from "react";
import DeletePopup from "../Components/DeletePopup";
import { useState } from "react";
import './About.css'

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const delete1 = () => {
    alert("Delete Successfully");
    setIsOpen(!isOpen);
  };
const first=()=>{
    alert("Show college details");
}
  return (
    <>
      <div className="grid-container">
        <div class="item1" onClick={first}>1</div>
        <div class="item2">2</div>
        <div class="item3">3</div>
        <div class="item4">4</div>
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>
        <div class="item7">8</div>
      </div>
      <button
        type="button"
        className="btn btn-dark btn-block mb-4"
        onClick={togglePopup}
      >
        Click
      </button>
      {isOpen && (
        <DeletePopup
          content={
            <>
              <div className="nested_popupcontent">
                <h6>Are you want to delete selected file?</h6>

                <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
                  <div class="form-group text-left">
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group text-left">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
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
                  <div className="text-left">
                    <button
                      type="submit"
                      class="btn form-control btn-sm btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <button type="button" class="btn btn-dark">
                  Save
                </button>
                <button type="button" class="btn btn-dark" onClick={delete1}>
                  Delete
                </button>
                <br />
                <div className="button_opt"></div>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default About;
