import React, { useEffect } from "react";
import { Tooltip } from "antd"; 
import "./_ScrollIndicator.scss";
import Scroll from "./Scrollicon.png";

export const ScrollIndicator = () => {
  useEffect(() => {
    const scroll = document.getElementById("top");

    const handleScroll = () => {
      const rotation = window.scrollY;
      scroll.style.transform = `rotate(${rotation}deg)`; // Applying rotation
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="top">
        {/* Wrap the image with Tooltip */}
        <Tooltip
          title="Oops! Scrolled too far! ⬆️😆"
          color="rgba(86, 55, 123, 1)"  
          placement="top"  
        >
          <a href="#main">
            <img src={Scroll} alt="scroll icon" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
