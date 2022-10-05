import React from "react";
import "./InfoTab.css";

const InfoTab = ({ title, subtitle }) => (
  <div className="info-wrapper">
    <div className="info">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
);
export default InfoTab;
