import React from "react" ; 
import ss from "../src/images/Untitled.jpg"
import web1 from "../src/images/Untitled1.jpg"
import web2 from "../src/images/Untitled2.jpg"
import './form';

const Contact = () => {
  
    return(
    <>
    <section id="contact" className="d-flex align-items-center">
     <div className="container-fluid nav_bg">
         <div className="row">
             <div className="col-10 mx-auto">
                 <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex jusitfy-content-center flex-column">
                        <h1 className="">I will design a <strong className="brand-name">premium website</strong> for your business</h1>
                        
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner pt-5">
    <div class="carousel-item active" data-interval="3000">
      <img src={ss} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={web1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={web2} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  
</div> 
             </div>

                     <div className="col-lg-6 order-1 order-lg-2 px-4">
                     <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Basic</a>
    <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Standard</a>
    <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Premium</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Starter Package</h3></div>
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Rs 15000/-</h3></div>
</div>
 <h3 className="lead pt-4">" Perfect for a shop-front or one-page design "</h3>
        <div className="list pt-5">
            <ul className>
                <li><strong>10 Days Delievery</strong></li>
                <li className="text-muted"> Source File</li>
                <li><strong> 1 Page</strong></li>
            </ul>
        </div>
        <div className="blockquote-footer text-center pt-4"><cite title="Source Title">Stay With Us</cite></div>
  </div>
  
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Standard Package</h3></div>
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Rs 28000/-</h3></div>
</div>
 <h3 className="lead pt-4">" Choose this package for beautifully-designed multiple page websites "</h3>
        <div className="list pt-5">
            <ul className>
                <li><strong>15 Days Delievery</strong></li>
                <li className="text-muted"> Source File</li>
                <li><strong> 5 Page</strong></li>
            </ul>
        </div>
        <div className="blockquote-footer text-center pt-4"><cite title="Source Title">Stay With Us</cite></div>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Premium Package</h3></div>
  <div class="p-2 flex-fill bd-highlight pt-4"><h3>Rs 50000/-</h3></div>
</div>
 <h3 className="lead pt-4">" For more ambitious projects, we can work together to create something completely bespoke for you "</h3>
        <div className="list pt-5">
            <ul className>
                <li><strong>30 Days Delievery</strong></li>
                <li><strong> Source File</strong></li>
                <li><strong> 10 Page</strong></li>
            </ul>
        </div>
        <div className="blockquote-footer text-center pt-4"><cite title="Source Title">Stay With Us</cite></div>
       
  </div>
</div>
            <div className="text-right">+917011594818</div>
            <div className="text-right">ysoni1614@gmail.com</div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     </section>
       

</>
    );
};

export default Contact;