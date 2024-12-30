import React from "react";
import "./_Certificate.scss";
import "./_Mediacertificate.scss";

import C from "./Certificates/certi6.jpeg";
import Datastructure from "./Certificates/certi2.jpeg";
import Digitalarts from "./Certificates/certi3.jpeg";
import Genesis from "./Certificates/certi4.jpeg";
import Internshala from "./Certificates/certi5.jpeg";
import Oasis from "./Certificates/certi1.jpeg";
import Paypal from "./Certificates/certi7.jpeg";
import Udyamsheel from "./Certificates/certi8.jpeg";

 const Certificate = () => {
  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".box").appendChild(items[0]);
    }
  };

  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".box").prepend(items[items.length - 1]);
    }
  };

  return (
    <div>
      <h2 className="mainheading">Certifications</h2>
      <div className="body">
        <div className="box">
          <div className="item">
            <img src={C} alt="Certification C" />
          </div>
          <div className="item">
            <img src={Datastructure} alt="Data Structure Certification" />
          </div>
          <div className="item">
            <img src={Digitalarts} alt="Digital Arts Certification" />
          </div>
          <div className="item">
            <img src={Genesis} alt="Genesis Certification" />
          </div>
          <div className="item">
            <img src={Internshala} alt="Internshala Certification" />
          </div>
          <div className="item">
            <img src={Oasis} alt="Oasis Certification" />
          </div>
          <div className="item">
            <img src={Paypal} alt="Paypal Certification" />
          </div>
          <div className="item">
            <img src={Udyamsheel} alt="Udyamsheel Certification" />
          </div>
        </div>
        <div className="buttons">
          <span className="prev" onClick={handlePrev}></span>
          <span className="next" onClick={handleNext}></span>
        </div>
      </div>
    </div>
  );
};
export default Certificate

