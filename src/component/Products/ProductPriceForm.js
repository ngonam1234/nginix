import React, { useState, useEffect } from 'react';
import products from '../Home/ListInsurance/InsuranceData';
import napas from '../Purchase/PurchaseBody/img/icon-payment-napas.png';
import paypal from '../Purchase/PurchaseBody/img/icon-payment-paypal.png';
import momo from '../Purchase/PurchaseBody/img/icon-payment-MoMo.png';
import vnpay from '../Purchase/PurchaseBody/img/icon-payment-vnpay.png';
import { Link} from 'react-router-dom';

const ProductPriceForm = ({ match = null, setSuccessDisp = f => f }) => {
  const prodImgLink = products.find((item) => item.name === match.params.productName).imageSrc;

  return (
    <div className=" bg-white flex flex-col shadow-lg rounded w-full m-auto gap-y-3 p-4 max-w-xs my-12 lg:my-0">
      <img
        className="object-contain w-full max-w-xs rounded border"
        src={prodImgLink}
        alt=""
      />
      <p className="text-2xl font-semibold mb-2">Chỉ từ 10,000 đồng</p>
      <div className="flex">
        <img src={napas} className="h-8" />
        <img src={paypal} className="h-8 ml-3" />
        <img src={vnpay} className="h-8 ml-3" />
      </div>
      <div className="self-center mt-4 w-full">
        <Link to={`/purchase/${match.params.productName}`}>
          <button
            type="submit"
            form="orderForm"
            className="inline-flex items-center justify-center h-10 w-full px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          >
            Mua hàng
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPriceForm;