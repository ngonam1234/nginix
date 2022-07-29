import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './style/style.module.css';

export default function PopupSuccess({ popupSuccess = null, setPopupSuccess = f => f }) {
  if (!popupSuccess) {
    return (<></>);
  }
  if (popupSuccess.goHome) {
    return (<Redirect to="/" />);
  }
  return (
    <>
      <div className={styles.bgPopup} /*  onClick={() => setPopupSuccess()} 'goHome': true */>
      </div>
      {/* <div className="z-20 fixed left-0 top-0 h-screen w-screen bg-black opacity-60" 
      </div> */}
      <div className="z-20 fixed top-28 left-0 right-0 w-full max-w-md m-auto" >
        <div className={styles.modalPopup}>
          <div className="relative w-full h-full flex flex-col items-center bg-white shadow rounded-sm">
            <div className="text-green-500 h-1/3 w-full flex flex-col justify-between items-center bg-green-100">
              <div className="m-2 self-end">
                <Link to={`/`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link>
              </div>
              <svg className="w-36 h-36" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="h-56 w-full flex flex-col justify-between items-center">
              <p className="text-4xl font-thin text-green-600">Đặt hàng thành công</p>
              <div className="grid grid-rows-2 gap-0">
                <div className="border-2 border-black border-b-0 p-2 text-2xl font-semibold text-green-600 w-full flex">
                  <p className=" m-auto">Mã đơn hàng</p>
                </div>
                <p className="border-2 border-black border-t p-2">{popupSuccess.orderId}</p>
              </div>
            </div>
            <div className="text-sm h-40 w-10/12 flex justify-between items-end">
              <Link to={`/`}>
                <button
                  className="-ml-2 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                >
                  Về trang chủ
                </button>
              </Link>
              <Link to={`/orders`}>
                <button
                  className="-mr-2 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                >
                  Xem đơn hàng
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}