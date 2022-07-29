import React, {useState} from 'react';

// only accepts javascript object with no grandchildrens!
const useFormObj = (initialObj) => {
  const [values, setValues] = useState({...initialObj});
  const changeFormValues = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };
  const resetFormValues = () => setValues({...initialObj});
  return [
    values,
    changeFormValues,
    resetFormValues
  ];
};

export default useFormObj;
