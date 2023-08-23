import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import ViewPage from "../Pages/ViewPage";
import EditPage from "../Pages/EditPage";
import FormPage from "../Pages/FormPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Login from "../Pages/Login";
import LoginForm from "../Pages/LoginForm";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import Footer from "../Components/Footer";
import Light from "../Pages/Light";
import Connect from "../Pages/Connect";
import NodeData from "../Pages/NodeData"



const MyRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<NodeData/>}/>
          <Route path="/viewpage" element={<ViewPage />} />
          <Route path="/editpage" element={<EditPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/formpage" element={<FormPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/light" element={<Light />} />
          <Route path="/connect" element={<Connect/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default MyRoutes;
