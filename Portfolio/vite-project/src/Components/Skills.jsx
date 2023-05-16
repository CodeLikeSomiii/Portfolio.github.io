import React from "react";
import tech from '../images/tech-icons.png'
import './skills.scss'
import CTA from "./CTA";
const Skills = () => {
  return (
    <>
    <div className="black" id="skills">
      <div className="container">
        <div className="skills row">
          <div className="left col-12 col-md-6">
          <img src={tech} alt="" className="skillimage" />
          </div>
          <div className="right col-12 col-md-6">
          <h1 className="skillsheading">Skills</h1>
          <p className="skillsdescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus error quae pariatur cumque incidunt velit eveniet, illum ratione quaerat repellendus corrupti eaque accusantium natus nam. Eius unde voluptate pariatur.</p>
          <CTA/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Skills;
