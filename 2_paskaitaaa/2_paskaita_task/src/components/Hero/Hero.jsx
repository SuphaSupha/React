import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, children }) => (
  <div className="hero-wrapper">
    <div className="wrapp">
      <h2>{title.lenght === 20 && <h2>{title}</h2>}</h2>
      <p>{subtitle}</p>
      <div>{children}</div>
    </div>
  </div>
);
export default Hero;
