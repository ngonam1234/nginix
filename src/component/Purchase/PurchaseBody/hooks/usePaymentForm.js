import React, {useState, useEffect} from 'react';
import useFormObj from '../../../../hooks/Form/useFormObj';

const paymentFormInitial = {
  "payment-method": 'napas',
  "fullName": '',
  "cardNumber": '',
  "month": '01',
  "year": '2022',
  "security": ''
};

const usePaymentForm = () => {
  const [paymentForm, changePaymentForm, resetPaymentForm] = useFormObj(paymentFormInitial);
  const [paymentError, setPaymentError] = useState({});

  useEffect(() => {
    if (paymentError && Object.keys(paymentError).length === 0 && paymentError.constructor === Object) return;
    validatePaymentForm();
  }, [paymentForm.fullName, paymentForm.cardNumber, paymentForm.security]);

  const validatePaymentForm = () => {
    const errors = {};

    if (!paymentForm.fullName.trim()) {
      errors.fullName = 'Điền họ và tên';
    }
    
    if (!paymentForm.cardNumber.trim()) {
      errors.cardNumber = 'Điền số thẻ';
    } else if (!/^\d{16}$/.test(paymentForm.cardNumber)) {
      errors.cardNumber = 'Điền số thẻ 16 số';
    }
    
    if (!paymentForm.security.trim()) {
      errors.security = 'Điền mã bảo vệ';
    } else if (!/^\d{3}$/.test(paymentForm.security)) {
      errors.security = 'Điền mã bảo vệ 3 số';
    }

    setPaymentError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      return true;
    } else {
      return false;
    }
  };

  return {paymentForm, changePaymentForm, paymentError, validatePaymentForm};
};

export default usePaymentForm;