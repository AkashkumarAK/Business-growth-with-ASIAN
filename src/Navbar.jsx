import React from 'react';
import AnimatedRoutes from './AnimatedRoutes';
import {Link,NavLink} from 'react-router-dom'
import { DiDebian } from "react-icons/di";
function Navbar() {
  return (
    <>
    <div className="container_fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
          
    <nav className="navbar navbar-expand-lg" style={{'background-color':'grey'}} >
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><DiDebian></DiDebian>Asian</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li class Name="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='service'>Services</Link>
          </li> 
         
         
        </ul>
       
      </div>
    </div>
  </nav>
  <div>
    <AnimatedRoutes/>
  </div>
  <footer>
            &copy; 2030 Minimal Website &nbsp;<span class="separator">|</span> Design by Akash Kumar <a
                href="/">Akash</a>
        </footer>
        
  </div>
        </div>
    </div>
    
  </>
  )
}

export default Navbar