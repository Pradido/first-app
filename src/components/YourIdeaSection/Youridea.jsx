import React from "react";
import "./Youridea.css";
import Ideas from "./Ideas.png";


function Youridea() {
    return (
      <div className="idea-container">
        <img className="idea-image" src={Ideas} alt="" />
      </div>
    );
}

export default Youridea;
