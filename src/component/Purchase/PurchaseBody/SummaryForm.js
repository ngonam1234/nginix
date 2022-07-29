import React from 'react';
import { IoIosMan } from "react-icons/io";
import { ImListNumbered } from "react-icons/im";
import { MdDateRange } from "react-icons/md";

// dateStr : yyyy-mm-dd
const getDateDisp = (dateStr) => {
  if (!dateStr) return null;
  const dateTmp = new Date(dateStr);
  return ((dateTmp.getMonth() > 8) ? (dateTmp.getMonth() + 1) : ('0' + (dateTmp.getMonth() + 1))) + '/' + ((dateTmp.getDate() > 9) ? dateTmp.getDate() : ('0' + dateTmp.getDate())) + '/' + dateTmp.getFullYear();
};

const SummaryForm = ({ prodName=null, orderForm = null, toDate = null, prodPriceDisp = null }) => {
  return (
    <section className="mt-6 bg-white rounded-md border-2 border-gray-200 w-96">
      <h2 className="p-5 text-2xl font-semibold capitalize dark:text-white border-b-2">{`Bảo hiểm ${prodName}`}</h2>

      <div className="flex flex-col divide-y-2">
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <IoIosMan size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Số người</p>
          <p className="absolute right-6 text-black">{orderForm.amountPersons}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <ImListNumbered size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Số ngày</p>
          <p className="absolute right-6 text-black">{orderForm.amountDays}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <MdDateRange size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Ngày bắt đầu</p>
          <p className="absolute right-6 text-black">{getDateDisp(orderForm.fromDate)}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <MdDateRange size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Ngày kết thúc</p>
          <p className="absolute right-6 text-black">{getDateDisp(toDate)}</p>
        </div>
      </div>

      <div className="p-5 text-2xl font-semibold capitalize border-t-2 flex justify-between">
        <p className="">Tổng</p>
        <p className="">{prodPriceDisp}</p>
      </div>

    </section>
  );
};

export default SummaryForm;
