import { Children } from "react";
import "./Custombtn.css";

const Custombtn = ({ variant, children }) => {
  // if (variant === "contained") {
  //   return <button className="btn contained">{children}</button>;
  // } else {
  //   return <button className="btn outlined">{children}</button>;
  // }
  const buttonType = variant === "contained" ? "contained" : "outlined";
  return <button className={`btn ${buttonType} `}>{children}</button>;
};

export default Custombtn;
