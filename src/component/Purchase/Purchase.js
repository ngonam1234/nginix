import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../Home/ListInsurance/InsuranceData';
import PurchaseHeader from './PurchaseHeader';
import PurchaseBody from './PurchaseBody/PurchaseBody';

const Purchase = () => {
  const prodName = useLocation().pathname.split('/').pop();
  const prodImgLink = products.find((item) => item.name === prodName).imageSrc;

  return (
    <>
      <div className=" mt-16 mx-auto lg:max-w-screen-xl md:px-24 lg:px-8">
        <PurchaseBody prodName={prodName} />
        <PurchaseHeader prodImgLink={prodImgLink} />
      </div>
    </>
  );
};
export default Purchase;