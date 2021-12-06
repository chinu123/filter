import { dateOperators, numberOperators } from "./operators";

export const filters = [
  {
    name: "Date",
    id: "createDate",
    type: "dateFilter",
    isDefaultOpen: true,
    span: [2],
    inputs: value => {
      const operator = {
        id: "operator",
        type: "select",
        defaultValue: "gt",
        options: dateOperators,
        validationRule: [
          {
            type: "required",
            message: "This filed is mandatory"
          }
        ]
      };
      const selectedOperator = value.operator || operator.defaultValue;
      return [operator].concat(dateOperators.find(obj => obj.value === selectedOperator).args);
    }
  },
  {
    name: "Amount",
    id: "amount",
    type: "inputFilter",
    isDefaultOpen: true,
    span: [2],
    inputs: value => {
      const operator = {
        id: "operator",
        type: "select",
        defaultValue: "gt",
        options: numberOperators,
        validationRule: [
          {
            type: "required",
            message: "This filed is mandatory"
          }
        ]
      };
      const selectedOperator = value.operator || operator.defaultValue;
      return [operator].concat(numberOperators.find(obj => obj.value === selectedOperator).args);
    }
  },
  {
    name: "Status",
    id: "status",
    span: [2],
    type: "inputFilter",
    isDefaultOpen: false,
    inputs: () => []
  }
]