import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="cntct-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="cntct-left col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact with <br />
                    our team
                  </h1>
                  <p className="main-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Etquia quis? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Etquia quis?
                  </p>

                  <img src="./images/contact.jpg" className="img-fluid"></img>
                </div>

                <div className="cntct-right col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild" >
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone number"
                          id=""
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email id"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="adress"
                          id=""
                          className="form-control"
                          placeholder="Add adress"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          //   for taking full width
                          placeholder="Enter message"
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" className="main-para">
                          I agree with all terms and conditions
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100"> Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
