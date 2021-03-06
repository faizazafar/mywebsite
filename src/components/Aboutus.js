import React, { useState } from "react";
import howToUseApp from "../API/Howtouse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  console.log(aboutData);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/react2.jpg"></img>
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title"> Available worldwide</h3>
              <h1 className="main-heading">How To Use App?</h1>
              {
                aboutData.map((currentele)=>{

                  const {id , title , info}= currentele
                  return (
                    <>
                      <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-para">
                         {info}
                        </p>
                      </div>
                    </div>

                    </>
                  )

                })
              }

    
              <br></br>
              <button className="btn-style btn-style-border">
                {" "}
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/call.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
