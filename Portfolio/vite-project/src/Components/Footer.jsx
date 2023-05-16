import React from "react";
import { FaYoutube,FaGithub,FaLinkedin,FaStackOverflow,FaInstagram } from "react-icons/fa";
import FooterSocialIcon from "./FooterSocialIcon";
import { scrollToSection } from "./Utils/helpers";

const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
            <img src="" alt="" />
        </div>
        <ul className="footer-menu-items">
        <li className="footer-menu-item" onClick={()=>scrollToSection('skills')}>Skills</li>
        <li className="footer-menu-item" onClick={()=>scrollToSection('gallery')}>Gallery</li>
        <li className="footer-menu-item" onClick={()=>scrollToSection('blogs')}>Blogs</li>
        <li className="footer-menu-item" onClick={()=>scrollToSection('contact')}>contact</li>
        </ul>
        <div className="social-icons">
            <FooterSocialIcon className='inside' color='#FF0000' icon={<FaYoutube/>} link={'https://www.youtube.com'}/>
            <FooterSocialIcon className='inside' color='#0D2636' icon={<FaGithub/>} link={'https://www.youtube.com'}/>
            <FooterSocialIcon className='inside' color='#f2740d' icon={<FaStackOverflow/>} link={'https://www.youtube.com'}/>
            <FooterSocialIcon className='inside' color='#0A66C2' icon={<FaLinkedin/>} link={'https://www.youtube.com'}/>
            <FooterSocialIcon className='inside' color='#E84C88' icon={<FaInstagram/>} link={'https://www.youtube.com'}/>
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2023 CodeLikeSomiii | All Rights Reserved
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
