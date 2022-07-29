import React from 'react';
import { BsCaretLeftFill, BsCaretDownFill } from "react-icons/bs";


export default function OrderDataBrief({type=null, state=null, createAt=null, paidAmount=null, show=null, setShow=f=>f}) {
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
  });
  const createDate = createAt.split('T')[0];
  const expandButton = show ? (
    <button className="focus:outline-none" onClick={()=>{setShow(!show);}}>
      <BsCaretDownFill></BsCaretDownFill>
    </button>
  ) : (
    <button className="focus:outline-none" onClick={()=>{setShow(!show);}}>
      <BsCaretLeftFill></BsCaretLeftFill>
    </button>
  );
  const stateDisp = (state==='Succeeded') ? (
    <p className="border-1 rounded-lg p-1 text-green-500 bg-gray-400 bg-opacity-20">
      Thành công
    </p>
  ) : (
    <p className="border-1 rounded-lg p-1 text-red-500 bg-gray-400 bg-opacity-20">
      {state}
    </p>
  );
  if (mediaQuery.matches) {
    return (
      <div name="orderBrief" className="flex relative">
      <span name="type" className="mr-7">
        <h6 className="font-medium"> { type } </h6>
        <p className="text-gray-500 text-opacity-75">{createDate}</p>
      </span>
      <span name="status" className="absolute order-3 right-8 self-center">
        {stateDisp}
      </span>
      <span name="expand" className="absolute order-3 w-5 right-0 self-center">
        {expandButton}
      </span>
    </div>
    );
  }
  return (
    <div name="orderBrief" className="flex relative">
      <span name="type" className="mr-7">
        <h6 className="font-medium"> { mediaQuery.matches ? type : 'Tên sản phẩm' } </h6>
        <p className="text-gray-500 text-opacity-75">{type}</p>
      </span>
      <span className="mr-7">
        <h6 className="font-medium">Ngày đặt</h6>
        <p className="text-gray-500 text-opacity-75">{createDate}</p>
      </span>
      <span className="">
        <h6 className="font-medium">Tổng tiền</h6>
        <p className="text-gray-500 text-opacity-75">{formatter.format(paidAmount)}</p>
      </span>
      <span name="status" className="absolute order-3 right-8 self-center">
        {stateDisp}
      </span>
      <span name="expand" className="absolute order-3 w-5 right-0 self-center">
        {expandButton}
      </span>
    </div>
  );
}