import React from "react"
import web from "../src/images/about1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () =>{
    return(
    <>
   <Common name="Welcome to"
           
            sec="We work closely with my clients to not only provide beautiful Web Design, but to understand the journey your customers needs to flow through to connect with your business in the most effective way. "
            visit="/project"
            btname="Portfolio"
            image={web}
    />
   
    </>
    );
};
 
export default About;