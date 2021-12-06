 export default function validateForm(formValue, formConfig) {
    const updatedError = {};

    const fieldList = formConfig.inputs(formValue);
    fieldList.forEach(({id: fieldID, validationRule}) => {
        const {error, message} = validateField(validationRule, formValue[fieldID]);
        updatedError[fieldID] = {error: error, message}
    });
    return updatedError;
}

function validateField(rules, value) {
    const error = {}
    rules && !!rules.length && rules.every(({type, message}) => { 
        if(type === "required") {
            const isValid = (value && value.trim().length);
            error.error=!isValid;
            error.message = message;
            
            return isValid;
        }
        if(typeof type === "function") {
            const isValid = type(value.trim());
            error.error=!isValid;
            error.message = message;
            return isValid;
        }
        //handle other type of validation.
        return true;
    });
    return error;

}