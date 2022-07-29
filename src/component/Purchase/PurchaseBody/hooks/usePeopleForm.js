import React, { useState, useEffect } from 'react';
import useFormArr from '../../../../hooks/Form/useFormArr';

const peopleFormInitial = {
  "fullName": "Nguyen Xuan Hop",
  "gender": 1,
  "dateOfBirth": "1998-12-20", // yyyy-mm-dd
  "passportCard": "232323232323",
};

const defaultObj = {
  "fullName": "",
  "gender": 1,
  "dateOfBirth": "", // yyyy-mm-dd
  "passportCard": "",
};

const usePeopleForm = (number, setCurrentStep) => {
  const [peopleForm, changePeopleForm_, peopleErrors, setPeopleErrors, resetPeopleForm] = useFormArr(peopleFormInitial, defaultObj, number);
  const [errorChecking, setErrorChecking] = useState(false);

  const changePeopleForm = (e, index) => {
    if (errorChecking) {
      const value = validatePeopleForm({...peopleForm[index], [e.target.name]: e.target.value});
      const newArr = [...peopleErrors];
      newArr[index] = {...value};
      setPeopleErrors(newArr);
    }
    changePeopleForm_(e, index);
  };
  
  const peopleSubmit = event => {
    event.preventDefault();
    if (!validatePeopleFormArr()) return;
    // updateTrv(orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate);
    // resetOrderForm();
    // setToDate("");
    setCurrentStep(prev => prev + 1);
  };

  const validatePeopleFormArr = () => {
    setErrorChecking(true);
    const result = peopleForm.map((item, index) => validatePeopleForm(item));
    setPeopleErrors(result);
    return result.reduce((res, val) => res && Object.keys(val).length === 0 && val.constructor === Object, true);
  };

  const validatePeopleForm = (obj) => {
    const errors = {};
  
    if (!obj.fullName.trim()) {
      errors.fullName = 'Điền họ và tên';
    }

    if (!obj.dateOfBirth.trim()) {
      errors.dateOfBirth = 'Điền ngày tháng năm sinh';
    }
    
    if (!obj.passportCard.trim()) {
      errors.passportCard = 'Điền mã hộ chiếu';
    } else if (!/^\d{12}$/.test(obj.passportCard)) {
      errors.passportCard = 'Điền mã hộ chiếu 12 số';
    }
    return errors;
  };

  return {peopleForm, changePeopleForm, peopleErrors, peopleSubmit};
};

export default usePeopleForm;
