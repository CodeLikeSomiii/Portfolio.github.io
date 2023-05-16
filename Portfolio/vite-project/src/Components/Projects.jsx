import React, { useState } from "react";
import "../App.css";
import Menu from "./Gallery";
import Buttons from "./Buttons";

const allCatValues = [
  ...new Set(
    Menu.map((curelem) => {
      return curelem.title;
    })
  ),
];
// console.log(allCatValues)
const Projects = () => {
  const [buttons, setButtons] = useState(allCatValues);
  const [items, setItems] = useState(Menu);

  const filterItems = (category) => {
    const updatedItems = Menu.filter((curelem) => {
      return category === curelem.title;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="project" id="gallery">
        <div className="container ctngallery">
          <h1 className="gallerytitle">Gallery</h1>
          <Buttons buttons={buttons} filterItems={filterItems} />

          <div className="flx row">
            {items.map((elem) => {
              return (
                <div key={elem.id} className="gallery-img-parent col-md-4 col-6 mb-4">
                  <img
                    className="gallery-img image-fluid"
                    // style={{ width: "100%" }}
                    src={elem.image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
