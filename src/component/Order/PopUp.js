import React, { useState } from 'react';
import styles from './style.module.css';

export default function PopupEdit({ popupEdit = null, setPopupEdit = f => f, formValues = null, changeFormValues = f => f }) {
  if (!popupEdit) {
    return (<></>);
  }
  return (
    <>
      <div className="z-20 fixed left-0 top-0 h-screen w-screen bg-black opacity-60">
      </div>
      <div className="z-20 fixed left-0 top-0 h-screen w-screen flex justify-center items-center">
        <div className={styles.modalPopup}>
          <div className="w-full max-w-xl h-96 bg-white rounded-lg relative">
            <div className="h-12 border-b-2 py-3 px-6 flex justify-between">
              <span className="font-medium text-lg">Chỉnh sửa đơn</span>
              <button className="font-medium text-lg hover:opacity-50 py-1 px-2 focus:outline-none" onClick={() => setPopupEdit(false)}> X </button>
            </div>
            <div className="px-6 py-5">
              <form id="orderEditForm" onSubmit={() => { }}>
                <div className="h-5/6 grid gap-6 grid-cols-2">
                  <div className="">
                    <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                      Ngày bắt đầu
                    </label>
                    <input type="date" id="fromDate" name="fromDate" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                      Ngày kết thúc
                    </label>
                    <input type="date" id="toDate" name="toDate" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="amountPersons" className="block text-sm font-medium text-gray-700">
                      Số người
                    </label>
                    <input type="number" id="amountPersons" name="amountPersons" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="promotion" className="block text-sm font-medium text-gray-700">
                      Mã khuyến mãi
                    </label>
                    <input type="number" id="promotion" name="promotion" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="promotion" className="block text-sm font-medium text-gray-700">
                      Địa chỉ khuyến mãi
                    </label>
                    <input type="text" id="promotionAddress" name="promotionAddress" value={formValues.promotionAddress} onChange={changeFormValues} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                </div>
              </form>
            </div>
            <div className="absolute bottom-4 w-full h-12 px-6 flex justify-between items-center">
              <button type="button" className="px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none" onClick={() => setPopupEdit(false)}>Thoát</button>
              <button type="submit" form="orderEditForm" className="px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}