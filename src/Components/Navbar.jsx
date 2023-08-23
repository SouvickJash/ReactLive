import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Image/23.jpg'
import search from '../Image/search.svg'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to='/'><img className="logo1" src={logo} alt="" width={80}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li> */}
        <li className="nav-item active">
        <Link className="nav-link" to="/">Nodedata</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/about'>About</Link>
      </li>
     
      <li className="nav-item active">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/connect">Connect</Link>
      </li>
    
  
    </ul>
    <form className="form-inline my-2 my-lg-0">
       <img className="search" src={search} alt="" width="20" height="20"/>
      <input className="form-control mr-sm-2" type="search" placeholder='Search' aria-label="Search"/>
      
      <button className="btn btn-danger my-2 my-sm-0" type="submit" >Search</button>
      
    </form>
  </div>
</nav>

    </>
  )
}

export default Navbar
