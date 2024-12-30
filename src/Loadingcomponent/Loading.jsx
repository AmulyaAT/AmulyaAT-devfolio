import React from "react";
import "./_Loading.scss";
import loadingGif from "./Loading.gif";

const Loading = () => {
  return (
    <div className="loader-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
