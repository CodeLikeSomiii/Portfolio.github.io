import React from "react";
// import girl from '../../src/girl.png'
// import girl from '../../src/images/girl.png'
import "./Header.scss";
import Navbar from "./Navbar";
import cloud from "../images/cloud.png";
import cloudSoft from "../images/cloud-soft.png";
import girl from '../images/girl.png'
// import Gihand from 'react-icons/fa'
import { FaHandSparkles } from "react-icons/fa";
import CTA from "./CTA";

const Header = () => {
  return (
    <>
      <div className="background">
        <div className="vector-bg">
          <Navbar />
          <div className="clouds">
            <img className="cloud" src={cloud} alt="" width="100%" />
            <img className="cloudSoft" src={cloudSoft} alt="" width="100%" />
          </div>
          <div className="header-body container ">
            <div className="row">
              <div className="left col-12 col-md-6">
                <p className="intro lineheight">Hello,I Am</p>
                <p className="intro">CodeLikeSomiii</p>
                <p className="headerdescription">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero iste vero aliquam asperiores, est nihil suscipit
                  tenetur, sunt quod at ut, minima repellendus quis illum vel
                  illo officiis ducimus impedit.
                </p>
                <CTA/>
              </div>
              <div className="right col-12 col-md-6">
                <img className="girl" src={girl} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
