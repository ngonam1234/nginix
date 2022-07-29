import React from 'react';

const OrderForm = ({ currentStep=null, orderForm=null, changeOrderForm=f=>f, toDate=null, submit=f=>f }) => {
  if (currentStep !== 1) return (<></>);
  window.scrollTo(0, 0);
  return (
    <>
      <section className="mt-6 p-6 bg-white rounded-md border-2 border-gray-200">

        <form id="orderForm" onSubmit={submit}>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Đơn hàng</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-900 font-medium" htmlFor="amountPersons">Số người mua bảo hiểm</label>
              <input value={orderForm.amountPersons} onChange={changeOrderForm} name="amountPersons" id="amountPersons" type="number" min="1" max="10" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="amountDays">Số ngày bảo hiểm</label>
              <input value={orderForm.amountDays} onChange={changeOrderForm} name="amountDays" id="amountDays" type="number" min="1" max="90" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="fromDate">Ngày bắt đầu</label>
              <input value={orderForm.fromDate} onChange={changeOrderForm} name="fromDate" id="fromDate" type="date" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="toDate">Ngày kết thúc</label>
              <input value={toDate} id="toDate" type="date" required readOnly={true} className="mb-6 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
        </form>
      </section>
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          form="orderForm"
          className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Tiếp theo
        </button>
      </div>
    </>
  );
};

export default OrderForm;
