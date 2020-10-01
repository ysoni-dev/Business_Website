import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route , Switch, Redirect} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Home from "./Home";
import Error from "./Error" ;
import Navbar from "./Navbar"
import logo from './logo.svg';
import './App.css';
import Try from "./Try"


const App = () => {
  return (
    <>
    <Navbar/>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/project" component={Project}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/try" component={Try}/>
     <Redirect to="/" component={Error}/>
   </Switch>
    
    </>
  );
};




export default App;