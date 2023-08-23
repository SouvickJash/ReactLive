import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import d1 from "../Image/d1.svg";
import edit from "../Image/e.svg";
import view from "../Image/v.svg";
import addicon from "../Image/addicon.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Style.css"

const NodeData = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [user, setUser] = useState([]);
  const[loading,setLoading]=useState(true)
  const navigate = useNavigate();

  const getApi = async () => {
    const response = await axios.get("/getlastdata");
    setBackendData(response?.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(backendData);

  const handleChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  //
  // view
  function View(_id, n, e, a, age) {
   
    console.log(`id:${_id} name:${n} email:${e} adress:${a} age:${age}`);
    toast.success("View Successfully");
    navigate("/viewpage", {
      state: {
        id: _id,
        name: n,
        email: e,
        adress: a,
        age: age,
      },
    });
  }
  //Edit function
  function Edit(_id, n, e, a, age) {
    console.log(`id:${_id} name:${n} email:${e} adress:${a} age:${age}`);

    navigate("/editpage", {
      state: {
        id:_id,
        name: n,
        email: e,
        address: a,
        age: age,
      },
    });
  }
// delete
function example(n) {
   console.log(`Deleted id: ${n}`);
   // alert(`DATA DELETEED ID NUMBER: ${n}`);
   toast.success("Delete Successfully");
 }

//loading
setTimeout(() => {
   setLoading(false);
 }, 800);
 if (loading) {
   return (
     <>
       <div class="spinner-border text-primary" role="status">
         <span class="sr-only">Loading...</span>
       </div>
     </>
   );
 }
  return (
    <>
      <p>{user}</p>
      <NavLink className="nav-link22" to="/formpage">
        <caption>
          <img
            src={addicon}
            alt=""
            width="40"
            height="40"
            style={{ marginLeft: 580 }}
          />
        </caption>
      </NavLink>
      <div className="ss">
        <ReactSearchBox
          placeholder="Search "
          value="Doe"
          onChange={handleChange}
          //   data={data}
          callback={(record) => console.log(record)}
          // width="60%"
        />
      </div>
      <table className="backenddata">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" className="name">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">AGE</th>
            <th scope="col" colSpan={3} rowSpan={3} className="action">
              ACTION
            </th>
          </tr>
        </thead>

        {backendData.newdata?.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <td data-label="Account">{item._id}</td>
                  <td data-label="Due Date">{item.name}</td>
                  <td data-label="Due Date">{item.email}</td>
                  {/* <td data-label="Amount">
                    {item.email.slice(0, 3) +
                      "@@@" +
                      item.email.slice(item.email.indexOf("."))}
                  </td> */}
                  <td data-label="Due Date">{item.address}</td>
                  <td data-label="Due Date">{item.age}</td>

                  {/* 
                  <td data-label="Period">
                    {item.phone.length >= 14
                      ? item.phone.slice(0, 12) + "..."
                      : item.phone}
                  </td> */}
                  <td>
                    <img
                      title="view"
                      src={view}
                      alt=""
                      width="20"
                      height="20"
                      margin-left="15px"
                      onClick={() =>
                        View(
                          item._id,
                          item.name,
                          item.email,
                          item.address,
                          item.age
                        )
                      }
                    />
                    {/* </td> */}
                    {/* <td className="edit"> */}
                    <img
                      src={edit}
                      // id="app-title"
                      alt=""
                      width="20"
                      height="20"
                      margin-left="15px"
                      onClick={() =>
                        Edit(
                          item._id,
                          item.name,
                          item.email,
                          item.address,
                          item.age
                        )
                      }
                    />
                    {/* </td> */}
                    {/* <td className="delete"> */}
                    <img
                      src={d1}
                      alt=""
                       onClick={() => example(item._id)}
                      width="20"
                      height="20"
                      margin-left="15px"
                    />
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <ToastContainer />
    </>
  );
};

export default NodeData;