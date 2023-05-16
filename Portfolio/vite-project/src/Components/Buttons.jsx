import React from "react";

const Buttons = ({ buttons, filterItems }) => {
  return (
    <>
      <div className="buttons">
        <div className="row">
          {buttons.map((e, i) => {
            return (
              <div key={i} className="col-4 m-auto  ">
                <p className="bttn" onClick={() => filterItems(e)}>
                  {e}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Buttons;
