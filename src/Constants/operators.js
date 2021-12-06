const inLastTimeLine = [
    {
      label: "Days",
      value: "day"
    },
    {
      label: "Months",
      value: "month"
    },
    {
      label: "Years",
      value: "year"
    }
  ];
  const numberOperators = [
    {
      label: "Is greater than",
      value: "gt",
      args: [
        {
          id: "arg1",
          type: "text",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            },
            {
              type: (val) => /^[0-9]*$/.test(val),
              message: "Please enter a number"
            }
          ]
        }
      ]
    },
    {
      label: "Is less than",
      value: "lt",
      args: [
        {
          id: "arg1",
          type: "text",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            },
            {
              type: (val) => /^[0-9]*$/.test(val),
              message: "Please enter a number"
            }
          ]
        }
      ]
    },
    {
      label: "Is in between",
      value: "bt",
      layout: "horizontal",
      args: [
        {
          id: "arg1",
          type: "text",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            },
            {
              type: (val) => /^[0-9]*$/.test(val),
              message: "Please enter a number"
            }
          ]
        },
        {
          id: "arg2",
          type: "text",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            },
            {
              type: (val) => /^[0-9]*$/.test(val),
              message: "Please enter a number"
            }
          ]
        }
      ]
    }
  ];
  
  const dateOperators = [
    {
      label: "Is greater than",
      value: "gt",
      args: [
        {
          id: "arg1",
          type: "date",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            }
          ]
        }
      ]
    },
    {
      label: "Is less than",
      value: "lt",
      args: [
        {
          id: "arg1",
          type: "date",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            }
          ]
        }
      ]
    },
    {
      label: "Is between",
      value: "bt",
      layout: "horizontal",
      args: [
        {
          id: "arg1",
          type: "date",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            }
          ]
        },
        {
          id: "arg2",
          type: "date",
          validationRule: [
            {
              type: "required",
              message: "This filed is mandatory"
            }
          ]
        }
      ]
    },
    {
    label: "In The Last",
    value: "il",
    layout: "horizontal",
    args: [
      {
        id: "arg1",
        type: "text",
        validationRule: [
          {
            type: "required",
            message: "This filed is mandatory"
          }
        ]
      },
      {
        id: "arg2",
        type: "select",
        options: inLastTimeLine,
        defaultValue: "day",
        validationRule: [
          {
            type: "required",
            message: "This filed is mandatory"
          }
        ]
      }
    ]
  }];
  
  
  
  export { numberOperators, dateOperators, inLastTimeLine };
  