import React, { useEffect, useState } from 'react';
import OrderDataBrief from "./OrderDataBrief.js";
import OrderDataDetail from "./OrderDataDetail.js";

export default function OrderData({type=null, orderId=null, state=null, createdLogtimestamp=null, payload=null}) {
  const [show, setShow] = useState(false);
  const obj = JSON.parse(payload);
  // useEffect(() => {
  //   setShow(!show);
  // }, [clicked]);
  //  onClick={()=>{setShow(!show);}}
  return (
    <div className="flex flex-col w-full xl:max-w-5xl p-6 bg-white border-2 rounded-xl shadow-md border-gray-200 overflow-hidden">
      <OrderDataBrief type={type} state={state} createAt={createdLogtimestamp} paidAmount={obj.detail.orders.ordPaidMoney} show={show} setShow={setShow}/>
      <OrderDataDetail show={show} obj={obj} />
    </div>
  );
}
