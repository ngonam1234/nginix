import React, {useState, useEffect} from 'react';

// Keep track of forms that have similar repeated fields
const useFormArr = (initialObj, defaultObj, number) => {
  const [values, setValues] = useState(Array(number).fill({...initialObj}));
  const [errors, setErrors] = useState(Array(number).fill({}));
  useEffect(() => {
    const newArr = [...Array(Number(number))].map((item, index) => {
      if (index < values.length) return {...values[index]};
      return {...defaultObj};
    });
    const newArrErr = [...Array(Number(number))].map((item, index) => {
      if (index < errors.length) return {...errors[index]};
      return {};
    });
    setValues(newArr);
    setErrors(newArrErr);
  }, [number]);
  const changeFormValues = (e, index) => {
    const { name, value } = e.target;
    const newArr = [...values];
    newArr[index][name] = value;
    setValues(newArr);
  };
  const resetFormValues = () => setValues(Array(number).fill({...initialObj}));
  return [
    values,
    changeFormValues,
    errors, setErrors,
    resetFormValues
  ];
};

export default useFormArr;
