import React from 'react'
import { useState } from 'react';
// import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { NavLink } from 'react-router-dom';
import leftarrow from '../Image/left-arrow.svg'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Contact = () => {
  // const [phone, setPhone] = useState("");
  const navigate=useNavigate()
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Age, setAge] = useState("");
  const [Password, setPassword] = useState("");

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

const submitData=async(e)=>{
  e.preventDefault();
  var obj={
    "name":Name,
    "email":Email,
    "address":Address,
    "age":Age,
    "password":Password,
}
console.log("value",obj);


await axios.post("/insert",obj)
.then((response) => {
  console.log("response",response);
  
  if (response.data.status === 201) {
    toast.success(response.data.message);
    // toast.success("success")
    navigate("/");
    
  } else if (response.status === 404) {
    
    // toast.error(response.status);
    toast.error("fail")
  }
 
}).catch((err)=>{
  console.log(err);
  toast.error(err);
});
  // else {
  //   toast.success("okkkkkk");
  // }
}
  return (
    <>
     
      <NavLink className="nav-link" to='/'>
      <caption><img src={leftarrow} alt="" width="40" height="40" onClick={() => navigate(-1)} style={{marginLeft: 1, marginBottom:10}}/></caption>
      </NavLink>

<div class="flex-parent-element">
  <div class="flex-child-element magenta">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.755466062114!2d88.06113837396325!3d23.03274911595096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f85db3b7a4ba93%3A0x727eaa9228455b43!2sGurbari%20Primary%20School!5e0!3m2!1sen!2sin!4v1692074502004!5m2!1sen!2sin" width="100%" height="410" style={{ border: 0, borderRadius: "10px",marginTop:"-26px",marginLeft:"30px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </div>
  <div class="flex-child-element green">
  <h2 className="w-50 mx-auto mt-3" style={{color:"green"}}>Contact page....</h2>
      
      <form className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
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

        {/* <div class="form-group text-left">
        <PhoneInput
            country={"us"}
            enableSearch={true}
            value={phone}
            onClick={(e) => setPhone(e.target.value)}
            // onChange={fun1}
            />
        </div> */}

        {/* <div class="form-group text-left">
        Date: <input id="when" type="date" min={disablePastDate()} />
        </div> */}

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

          {/* <div class="form-group text-left">
          <input
            type="password"
            // name="pass"
            class="form-control"
            id="p1"
            placeholder="Confrom password"
         />
        </div> */}

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

export default Contact
