import React from "react";

const Input = (props) => {
  const { label, value='', onChange, className, ...otherProps } = props;
  const setValue = (e) => {
    typeof onChange === "function" && onChange(e.target.value);
  };

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input value={value} {...otherProps} onChange={setValue}/>
    </div>
  );
};
export default Input;
