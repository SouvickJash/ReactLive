import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(".....", state);
  return (
    <>
      <div className="card1">
        <div
          className="card text-white bg-dark mb-3"
          style={{ maxWidth: "18rem", margintop: "143px", marginleft: "518px" }}
        >
          <div className="card-header">VIEW DETAILS</div>
          <div className="card-body">
       
          <h6 className="card-title">ID: {state.id}</h6>
            <h6 className="card-title">Name: {state.name}</h6>
            <h6 className="card-title">Email: {state.email}</h6>
            <h6 className="card-title">Address: {state.adress}</h6>
            <h6 className="card-title">Age: {state.age}</h6>
            
            <button class="btn btn-danger" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
