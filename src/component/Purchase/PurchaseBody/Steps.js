import React from 'react';

const steps = ['Đơn hàng', 'Hành khách', 'Thanh toán'];

const Steps = ({ currentStep=null, setCurrentStep=f=>f }) => {
  return (
    <div className="flex items-center mt-8">
      {steps.map((item, index) => <StepDisp key={index} item={item} step={index + 1} currentStep={currentStep} setCurrentStep={setCurrentStep} />)}
    </div>
  );
};


const StepDisp = ({item=null, step=null, currentStep=null, setCurrentStep=f=>f}) => {
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  let svg;
  let button;
  if (step !== 3) {
    svg = (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 text-opacity-60 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
      </svg>
    );
  }
  if (step < currentStep) {
    button = (
      <button className={`mr-2 text-gray-600 text-opacity-60 focus:outline-none ${mediaQuery.matches ? 'text-base' : 'text-lg'}`} onClick={() => setCurrentStep(step)}>
        {item}
      </button>
    );
  } else if (step === currentStep) {
    button = (
      <button className={`mr-2 text-lg font-medium focus:outline-none cursor-default ${mediaQuery.matches ? 'text-base' : 'text-lg'}`}>
        {item}
      </button>
    );
  } else {
    button = (
      <button className={`mr-2 text-lg text-gray-600 text-opacity-60 focus:outline-none cursor-not-allowed ${mediaQuery.matches ? 'text-base' : 'text-lg'}`}>
        {item}
      </button>
    );
  }
  return (
    <>
      {button}
      {svg}
    </>
  );
};
export default Steps;
