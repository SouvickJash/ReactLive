import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import leftarrow from '../Image/left-arrow.svg'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import '../Css/Style.css'


const Register = () => {
   const navigate=useNavigate()
   const [Name, setName] = useState("");
   const [Email, setEmail] = useState("");
   const [Address, setAddress] = useState("");
   const [Age, setAge] = useState("");
   const [Password, setPassword] = useState("");
   const [confpassword, setConfPassword] = useState("");

   const submitData=async(e)=>{
      e.preventDefault();
      var obj={
        "name":Name,
        "email":Email,
        "address":Address,
        "age":Age,
        "password":Password,
        "confpassword":confpassword
    }
    console.log("value",obj);
    if(Password!==confpassword){
      toast.error("password and confpassword are not matched")
   }
   else{
    await axios.post("/registedata",obj)
    .then((response) => {
      console.log("response",response);
      
      if (response.data.status === 201) {
        toast.success(response.data.message);
        // toast.success("success")
        // navigate("/regdata");
        
      } else if (response.status === 404) {
        
        // toast.error(response.status);
        toast.error("fail")
      }
     
    }).catch((err)=>{
      console.log(err);
      toast.error(err);
    });
   }

    
    

    }
  return (
    <>
        <NavLink className="nav-link" to='/'>
      <caption><img src={leftarrow} alt="" width="40" height="40" onClick={() => navigate(-1)} style={{marginLeft: 1, marginBottom:10}}/></caption>
      </NavLink>

<div class="flex-parent-element">

  <div class="flex-child-element green">
  {/* <h2 className="register mx-auto mt-3" style={{color:"green"}}>Register page..</h2> */}
      
      <form className="w-10 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
        <div class="form-group text-left">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
        </div>
        <div class="form-group text-left">
          <input
            
            type="email"
            className="form-control"
            placeholder="Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div class="form-group text-left">
          <input
            type="Address"
            className="form-control"
            placeholder="Address"
            value={Address}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div class="form-group text-left">
          <input
            type="Age"
            className="form-control"
            placeholder="Age"
            value={Age}
            onChange={(e)=>setAge(e.target.value)}
          />
        </div>

        <div class="form-group text-left">
          <input
            type="password"
            name="pass"
            class="form-control"
            id="p1"
            placeholder="Enter password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div class="form-group text-left">
          <input
            type="password"
            name="pass"
            class="form-control"
            id="p2"
            placeholder="Confirm password"
            value={confpassword}
            onChange={(e)=>setConfPassword(e.target.value)}
          />
        </div>



        <div className="text-left">
          <button type="submit" class="btn form-control btn-sm btn-primary" value="submit" onClick={submitData}>
            Submit
          </button>
        </div>
      </form>
  </div>
</div>
<ToastContainer />
    </>
  )
}

export default Register
