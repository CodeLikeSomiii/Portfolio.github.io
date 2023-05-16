import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1 className="heading">Contact Me</h1>
        <div className="container">
          <div className="row ">
            <div className="col-md-5 main">
              <div className="contact-card">
                <p className="contactCardText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, explicabo?Minus, explicabo?Minus, explicabo?
                </p>
                <a className="contactCardText" href="tel:5554280940">
                  Call us at 555-428-0940
                </a>
                <p className="contactCardText">suleman11.22acc@gmail.com</p>
              </div>
            </div>
            <div className="col-md-7">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name
                  </label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Address
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="input-group col-12">
                  <span class="input-group-text">Thoughts</span>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>

                <div class="col-12 ">
                  <button type="submit" class="sub btn btn-danger">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
