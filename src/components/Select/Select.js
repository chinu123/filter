import React from "react";

const Select = (props) => {
  const { label, value, options, onChange, className, ...otherProps } = props;

  const setValue = (e) => {
    typeof onChange === "function" && onChange(e.target.value);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <select {...otherProps} className={className} onChange={setValue}>
        {options.map((obj) => (
          <option
            value={obj.value}
            key={obj.value}
            selected={obj.value === value}
          >
            {obj.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
