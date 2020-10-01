import React from "react"
import web from "../src/images/business1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () =>{
    return(
    <>
  <Common name="Grow your business with"
          sec="We are the team of talented developer making websites."
            visit="/about"
            btname="Get Started"
            image={web}
    />
    </>
    );
};
 
export default Home;