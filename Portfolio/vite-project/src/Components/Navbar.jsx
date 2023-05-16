import React from "react";
import './Navbar.scss'
import CTA from "./CTA";
import logo from '../../public/logo.png'
import { scrollToSection } from "./Utils/helpers";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav class="navbar navbar-expand-lg">
          <div class="container mt-4">
            {/* <a class="navbar-brand" href="#"> */}
             <img src={logo} alt="" width="10%"/>
            {/* </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item navv" onClick={()=>scrollToSection('skills')}>
                  <a class="nav-link active" aria-current="page">
                    Skills
                  </a>
                </li>
                <li class="nav-item navv">
                  <a class="nav-link active" aria-current="page" onClick={()=>scrollToSection('blogs')}>
                 Blogs
                  </a>
                </li>
                <li class="nav-item navv">
                  <a class="nav-link" onClick={()=>scrollToSection('gallery')}>
                    Gallery
                  </a>
                </li>
                <li class="nav-item CTA">
                  <a class="nav-link CTAA" onClick={()=>scrollToSection('contact')}><CTA/></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
