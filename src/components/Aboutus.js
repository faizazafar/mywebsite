import React from 'react'

const Aboutus= () => {
  return (
    <>
      
      <section className="common-section our-services">
          <div className="container mb-5">
              <div  className="row">
                  <div className="col-12 col-lg-5 text-center our-ser-img">

                      <img src="./images/react2.jpg"></img>

                  </div>
                  <div className="col-12 col-lg-7 our-ser-list">

                
                <h3 className="mini-title"> Available worldwide</h3>
                <h1 className="main-head">How To Use App?</h1>

                <div className="row ourservice-list">

                    <div className="col-1 service-num">1</div>
                    <div className="col-10 service-data">
                    
                    <h2>Sign In</h2>
                    <p className="main-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?
                    </p>
                    </div>


                </div>

                <br></br>  
                <button className="btn-style btn-style-border"> Learn More</button>    
                </div>



            </div>


          </div>


      </section>
    </>
  )
}

export default Aboutus


