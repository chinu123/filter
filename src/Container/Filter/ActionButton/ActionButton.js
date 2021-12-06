import React from "react";
import Button from "../../../components/Button";

const ActionButton =({resetForm, submitForm}) => {

    return (
        <div className="headerWrapper">
            <Button text="Reset" onClick={resetForm} />
            <h4 className="header">Filters</h4>
            <Button text="Submit" onClick={submitForm} />
          </div>
    )
};

export default ActionButton;