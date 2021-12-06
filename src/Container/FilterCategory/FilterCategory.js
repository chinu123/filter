import React from "react";

import "./FilterCategory.css";

const FilterCategory = ({children, name, className, isOpen}) => {

  if(children) {
    return (
      <div className={className}>
        <label>{name}</label>
        <div>
          {
            React.Children.map(children, child => isOpen && child)
          }
        </div>
        
      </div>
     )
  }
  return null;
 
};

export default FilterCategory;
