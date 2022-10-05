import React from "react";
import "./CardOne.css";

const CardOne = ({ imageUrl, title }) => (
  <div className="card-wrapper">
    <div className="card">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
    </div>
  </div>
);
export default CardOne;
