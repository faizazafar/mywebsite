import React, { useState } from "react";
import Workapi from "../API/Workapi";
function Howitwork() {
  const [workdata, setworkdata] = useState(Workapi);
  console.log(workdata);
  return (
    <>
      <div className="work-con container">
        <h1 className="main-heading text-center">How Does It Work</h1>

        <div className="row">
          {workdata.map((current) => {

              const { id , logo ,title,info} = current
            return (
              <>
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                  <i class={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-para w-100">{info}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Howitwork;
