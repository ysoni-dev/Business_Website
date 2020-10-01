import React from "react";
import {NavLink} from "react-router-dom";
import image from "../src/images/Birds-Flourish.svg";

const Navrbar = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light ">       
  <NavLink className="navbar-brand brand" to="/">YsoniCompany</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
  
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      
        <NavLink activeClassName="acn" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="acn" className="nav-link " to="/project">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="acn" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="acn" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
</div>
          </div>
        </div>
        </>
    );
};

export default Navrbar;