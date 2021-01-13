import React from "react";
import {Link, Text }from "react-router-dom";
import { NavLink } from "react-router-dom";
import web from "../src/images/cool1.jpg";
import HoverVideoPlayer from 'react-hover-video-player';

const Card = (props) =>{
    return(
    <>


















  
 <div class="row row-cols-1 row-cols-md-2 gy-4 gx-2">
  <div class="col mb-4 gy-4">
    <div class="card text-center service-card">
        <a target="_blank" href={props.href}>
       <video
         onMouseOver={event => event.target.play()}
         onMouseOut={event => event.target.pause()}
        //  onClick={event => event. window.location.href = 'https://ysoni-dev.github.io/crems/' }
       height="400" width="400" muted loop period><source src={props.vidsrc}></source>
       </video></a>
        <div class="card-body">
        <h5 class="card-title ctitle">{props.title}</h5>
      </div>
    </div>
  </div>
</div>
              
    </>
    );
};
export default Card;