import React from "react";

export default function Header() {
  return (
    <>
       <header>
        <section className="container main-con">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn From Scratch <br /> Easy For You.
              </h1>
              <p className="main-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-text">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/react.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/react3.jpg"
                alt="heroimg2"
                className="img-fluid main-hero-img2 "
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
