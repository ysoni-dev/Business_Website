import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bat1 from "../src/images/Untitled.jpg"
import bat2 from "../src/images/Untitled1.jpg"
import bat3 from "../src/images/Untitled2.jpg"
const Try = () =>{
    const $ =() =>{
        $(document).ready(function(){
            $("#cat").owl({
                items:5,
                singleItem:true,
                bullets:true
            });
        })

        }

 return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bat1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={bat2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={bat3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </>
 ); 
};
export default Try;