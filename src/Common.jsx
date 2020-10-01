import React from "react"
import web from "../src/images/Floral-Flourish-5.svg";
import g1 from "../src/images/one.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) =>{
    return(
    <>
    <section id="header" className="d-flex align-items-center"> 
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main">
                           <h1>{props.name}<strong className="brand-name bname"> YsoniCompany</strong></h1>
                           <h4 className="my-3 tname">{props.sec}</h4>
                           
                             <h5 className="aboutp">{props.sub}</h5>
                            <div className="mt-3 "><NavLink to={props.visit} className="btn btn-outline-danger">{props.btname}</NavLink>
                            </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-1">
                                <img src={props.image} className="img-fluid imged animated" alt="pic"></img>
                            </div>
                            </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
    );
};
 
export default Common;