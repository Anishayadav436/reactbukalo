import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../Images/bukalologo.png';
import './style.css';
const Header=()=>{
    return(
      // py-2
        <div classNameName="Navbar">
<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark   px-4  pr-5">
      <img src={logo} to ='/' alt="" width="200" height="60" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active px-2">
             <NavLink className=" nav-link" to ="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active  px-2">
             <NavLink className="nav-link " to ="/about" >About Us</NavLink>
            
            </li>
         
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/topbrands">Brands</NavLink>
              </li>
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/product">Our Products</NavLink>
              </li> 
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/whybukalo">Why Bukalo</NavLink>
              </li>
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/testimonial">Testimonial </NavLink>
              </li>
              
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/facts">Facts</NavLink>
              </li>
              
              <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/homeblog">Blogs</NavLink>
              </li>
            <li className="nav-item active px-2">
               <NavLink className="nav-link" to ="/contactme">Contact </NavLink>
              </li>
          </ul>
        </div>

      </nav>

        </div>
    )
};
export default Header;