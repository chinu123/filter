import React from "react";
import "./Button.css";

const Button = prop => {
  const {text, ...otherProps} = prop;

  return <button className="button" {...otherProps}>{text}</button>
};

export default Button;