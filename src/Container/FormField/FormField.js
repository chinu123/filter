import React from "react";
import DateInput from "../../components/DateInput";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./FormField.css";

const FormField = (props) => {
  const { type, error, className, ...otherProps } = props;

  const getFormField = () => {
    switch (type) {
      case "text": {
        return Input;
      }
      case "select":
        return Select;
      case "date":
        return DateInput;
      default:
        return Input;
    }
  };

  const FieldComp = getFormField();

  return <div className={className}>
    <FieldComp {...otherProps} />
    {error && error.error && <div className="error">{error.message}</div>}
    </div>;
};

export default FormField;
