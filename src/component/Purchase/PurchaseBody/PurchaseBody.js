import React, { useState, useEffect } from 'react';
import Steps from './Steps';
import SummaryForm from './SummaryForm';
import useOrderForm from './hooks/useOrderForm';
import OrderForm from './OrderForm';
import PeopleForm from './PeopleForm';
import usePeopleForm from './hooks/usePeopleForm';
import PaymentForm from './PaymentForm';
import usePaymentForm from './hooks/usePaymentForm';
import CreateOrder from '../../../api/Product/createOrder';
import PopupSuccess from './PopupSuccess';

const PurchaseBody = ({ prodName = null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [popupSuccess, setPopupSuccess] = useState();
  const [errorDisp, setErrorDisp] = useState(false);
  const [posting, setPosting] = useState(false);
  const { orderForm, changeOrderForm, toDate, prodPriceDisp, orderSubmit } = useOrderForm(setCurrentStep);
  const { peopleForm, changePeopleForm, peopleErrors, peopleSubmit } = usePeopleForm(orderForm.amountPersons, setCurrentStep);
  const { paymentForm, changePaymentForm, paymentError, validatePaymentForm } = usePaymentForm();
  
  const paymentSubmit = event => {
    event.preventDefault();
    if (!validatePaymentForm()) return;
    const order = new CreateOrder();
    order.updateTrv(orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate);
    order.updateTrvDetails(peopleForm);
    postProductDetail(order);
  };

  const postProductDetail = async (order) => {
    setPosting(true);
    try {
      const data = await order.postOrder();
      setPosting(false);
      setPopupSuccess(data);
    } catch (err) {
      setErrorDisp(true);
      setPosting(false);
      console.log(err);
      setTimeout(() => setErrorDisp(false), 5000);
    }
  };

  return (
    <>
    <div className="px-4">
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="flex gap-4 ">
        <div className="flex-1">
          <OrderForm currentStep={currentStep} orderForm={orderForm} changeOrderForm={changeOrderForm} toDate={toDate} submit={orderSubmit} />
          <PeopleForm currentStep={currentStep} setCurrentStep={setCurrentStep} peopleForm={peopleForm} changePeopleForm={changePeopleForm} peopleErrors={peopleErrors} submit={peopleSubmit} />
          <PaymentForm currentStep={currentStep} setCurrentStep={setCurrentStep} paymentForm={paymentForm} changePaymentForm={changePaymentForm} paymentError={paymentError} submit={paymentSubmit} posting={posting} errorDisp={errorDisp}/>
        </div>
        <div className="hidden lg:block">
          <SummaryForm prodName={prodName} orderForm={orderForm} toDate={toDate} prodPriceDisp={prodPriceDisp}/>
        </div>
      </div>
    </div>
    <PopupSuccess popupSuccess={popupSuccess} setPopupSuccess={setPopupSuccess}/>
    </>
  );
};

export default PurchaseBody;
