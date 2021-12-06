import React, { useCallback, useState } from "react";
import "./Filter.css";
import FilterCategory from "../FilterCategory";


import FilterContext from "../FilterContext";
import Button from "../../components/Button";
import FormField from "../FormField/FormField";
import validateForm from "../util/validateForm";


const Filter = (prop) => {
  const {filters} = prop;

  const getArgs = (filterObj, values={}) => {
    const args = filterObj.inputs(values);
    const argValues = {};
    args.forEach(obj => {argValues[obj.id] = values[obj.id] || obj.defaultValue ||  undefined});
    return argValues;
  }

  const getDefaultState = useCallback(() => {
    const initState = {};
    filters.forEach(obj => {
      initState[obj.id] = {}
    });
    return initState;
  }, [filters]);

  const getDefaultFormValue = () => {
    const initState = getDefaultState();
    filters.forEach(obj => {
      const argValues = getArgs(obj);
      initState[obj.id] = {
        isSelected: obj.isDefaultOpen,
        ...argValues
      }
    });
    return initState;
  }

  const getFilterConfig = useCallback(filterID => filters.find(obj => obj.id === filterID), [filters]);

  const [formValue, setFormValue] = useState(getDefaultFormValue());
  const [error, setError] = useState(getDefaultState());

  const resetError = useCallback(() => {
    setError(getDefaultState());
  }, [getDefaultState]);

  const onChange = useCallback((filterID, fieldID, val) => {
    const selectedFilter = formValue[filterID] || {};
    const updatedFilterValues = {...selectedFilter};
    updatedFilterValues[fieldID] = val;

    const filterObj = getFilterConfig(filterID);
    const args = getArgs(filterObj, updatedFilterValues);
    setFormValue({...formValue, [filterID]: {...updatedFilterValues, ...args}});

    resetError();
},[formValue, getFilterConfig, resetError]);

  // Responsible to validate the form.
  // Handling the required check only.
  // getting called on click of submit button.
  const validateForms = () => {
    const updatedFilters = Object.keys(formValue);
    const updatedError = {...error};
    updatedFilters.forEach(filterID => {
      const selectedFilter = formValue[filterID] || {};
      const filterConfig = getFilterConfig(filterID);
      const formErrorStatus = validateForm(selectedFilter, filterConfig);
      updatedError[filterID]=formErrorStatus;
    })

    setError(updatedError);
    return updatedError;
  }

  const submitForm = () => {
    const updatedError = validateForms();
    console.log(formValue, updatedError, "final");
  }

  // reset formValue to default.
  const resetForm = () => {
    setFormValue(getDefaultFormValue());
    resetError();
  }

  const renderformActionButton = () => {
    return (
      <div className="headerWrapper">
        <Button text="Reset" onClick={resetForm} />
        <h4 className="header">Filters</h4>
        <Button text="Submit" onClick={submitForm} />
      </div>
  )
  };

  const HandleFieldChange = useCallback(
    (filterID, fieldID) => val => {
      onChange(filterID, fieldID, val);
    },
    [onChange]
  );

  /**
   * Renders the fields for a category.
   * Fields will be visible, only when the filter category is selected.
   * A particular category is selected or not is getting stored on the state.
   * The initial state comes from the filter config(defaultOpen field).
   * args Variable is getting used to store the formFields.
   */
  const renderFormFields = filterObj => {
    const selectedFilter = formValue[filterObj.id] || {}
    const args = filterObj.inputs(selectedFilter);

    return args.map(obj => {
      const fieldValue = selectedFilter[obj.id];
      const errorObj = error[filterObj.id] && error[filterObj.id][obj.id]
      return (
      <FormField
        {...obj}
        value={fieldValue}
        className="mt10"
        onChange={HandleFieldChange(filterObj.id, obj.id)}
        error={errorObj}
      />
    )
  })
    
  }

  // responsible to render each filter section.e.g Amount, Date, Status are considered as categories.
  const renderFilterCategories = () => {
    return filters.map(obj => {
      const filterValue = formValue[obj.id]
      const isOpen = filterValue && filterValue.isSelected;
        return (
          <FilterCategory
            className="category mr10"
            {...obj}
            isOpen={isOpen}
            collapsible={true}
          >
            {renderFormFields(obj)}
          </FilterCategory>
        )
      })
      
  };

  return (
    <FilterContext.Provider value={{error, formValue}}>
        <div className="wrapper">
          {renderformActionButton()}
          {renderFilterCategories()}
        </div>
    </FilterContext.Provider>
  );
};

export default Filter;
