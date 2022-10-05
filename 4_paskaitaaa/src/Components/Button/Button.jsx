import "./Button.css";

const Button = ({ variant, onClick, children }) => {
  //   if (variant === "contained") {
  //     return <button className="custom-button contained">{children}</button>;
  //   } else {
  //     return <button className="custom-button outlined">{children}</button>;
  //   }
  const buttonType = variant === "contained" ? "contained" : "outlined";
  return (
    <button className={`custom-button ${buttonType}`} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
