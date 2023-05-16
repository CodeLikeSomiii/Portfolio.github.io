import React from "react";
import blog1 from "../images/blogs/blog-thumb-1.jpg";
import blog2 from "../images/blogs/blog-thumb-2.jpg";
import blog3 from "../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
  return (
    <>
      <div className="blogs" id="blogs">
        <h1 className="blogs-heading">Blogs</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 card-main">
              <div className="card">
                <img src={blog1} alt=""  />
                <div className="card-body">
                  <h5 class="card-title">By Dawood</h5>
                  <p class="card-text">
                  His writing skills are extraordinary,he pretends to be a
                    simple and normal blogger but his skills show's us the
                    reality.
                  </p>
                  <a href="#" class="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <img src={blog2} alt=""  />
                <div className="card-body">
                  <h5 class="card-title">By Dawood</h5>
                  <p class="card-text">
                    His writing skills are extraordinary,he pretends to be a
                    simple and normal blogger but his skills show's us the
                    reality.
                  </p>
                  <a href="#" class="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <img src={blog3} alt=""  />
                <div className="card-body">
                  <h5 class="card-title">By Dawood</h5>
                  <p class="card-text">
                    His writing skills are extraordinary,he pretends to be a
                    simple and normal blogger but his skills show's us the
                    reality.
                  </p>
                  <a href="#" class="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
