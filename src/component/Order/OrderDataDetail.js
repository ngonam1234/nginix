import React, { useState } from 'react';
import PopupEdit from './PopUp.js';
import useFormObj from '../../hooks/Form/useFormObj.js';

const textGrayStyle = 'text-gray-500 text-opacity-75';
const dataStyle = 'font-normal';
const dataStyleMobile = 'font-normal text-sm';

export default function OrderDataDetail({ show = null, obj = null }) {
  if (!show) {
    return (<></>);
  }
  const [popupEdit, setPopupEdit] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const [currentTab, setCurrentTab] = useState('detail');
  // onChangeOrder(payload);
  const [trvForm, changeTrvForm, resetTrvForm] = useFormObj(obj.detail.trv);
  return (
    <>
      <PopupEdit popupEdit={popupEdit} setPopupEdit={setPopupEdit} formValues={trvForm} changeFormValues={changeTrvForm} />
      <Buttons currentTab={currentTab} setCurrentTab={setCurrentTab} setPopupEdit={setPopupEdit} />
      <DetailTab obj={obj} currentTab={currentTab} />
      <PaymentTab obj={obj} currentTab={currentTab} />
    </>
  );
}

function Buttons({ currentTab = null, setCurrentTab = f => f, setPopupEdit = f => f }) {
  const mediaQuery = window.matchMedia('(max-width: 640px)');

  const tabDisplay = (currentTab === 'detail') ?
    (
      <>
        <span className="mr-6 border-b-2 pb-2 border-red-500 font-bold">
          <button className="focus:outline-none" onClick={() => setCurrentTab('detail')}>
            Chi tiết đơn hàng
          </button>
        </span>
        <span className="text-gray-500 text-opacity-75">
          <button className="focus:outline-none" onClick={() => setCurrentTab('payment')}>
            Thanh toán
          </button>
        </span>
      </>
    )
    : (currentTab === 'payment') ?
      (
        <>
          <span className="mr-6 text-gray-500 text-opacity-75 ">
            <button className="focus:outline-none" onClick={() => setCurrentTab('detail')}>
              Chi tiết đơn hàng
            </button>
          </span>
          <span className="border-b-2 pb-2 border-red-500 font-bold">
            <button className="focus:outline-none" onClick={() => setCurrentTab('payment')}>
              Thanh toán
            </button>
          </span>
        </>
      ) : null;
  if (mediaQuery.matches) {
    return (
      <>
        <div className="flex mb-6 mt-2">
            <button className="w-1/2 mr-2 px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 opacity-50 hover:bg-gray-600 focus:shadow-outline focus:outline-none" onClick={() => setPopupEdit(true)}>
              Chỉnh sửa
            </button>
            <button className="w-1/2 px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 opacity-50 hover:bg-gray-600 focus:shadow-outline focus:outline-none">
              Huỷ đơn
            </button>
        </div>
        <div className="border-b-2 flex relative mb-6">
          {tabDisplay}

        </div>
      </>
    );
  }
  return (
    <div className=" border-b-2 flex relative my-6">
      {tabDisplay}
      <span className="absolute right-24 bottom-1">
        <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none" onClick={() => setPopupEdit(true)}>
          Chỉnh sửa
        </button>
      </span>
      <span className="absolute right-0 bottom-1">
        <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none">
          Huỷ đơn
        </button>
      </span>
    </div>
  );
}

function DetailTab({ obj = null, currentTab = null }) {
  if (currentTab !== 'detail') {
    return (<></>);
  }
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  if (mediaQuery.matches) {
    return (
      <>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Ngày bắt đầu</p>
            <p className={dataStyleMobile}>{obj.detail.trv.fromDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày kết thúc</p>
            <p className={dataStyleMobile}>{obj.detail.trv.toDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số ngày</p>
            <p className={dataStyleMobile}>{obj.detail.trv.amountDays}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số người</p>
            <p className={dataStyleMobile}>{obj.detail.trv.amountPersons}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Khuyễn mãi</p>
            <p className={dataStyleMobile}>{obj.detail.trv.promotion === 0 ? 'None' : obj.detail.trv.promotion}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Địa chỉ Sales</p>
            <p className={dataStyleMobile}>{obj.detail.trv.promotionAddress === '' ? 'None' : obj.detail.trv.promotionAddress}</p>
          </span>
        </div>
        {obj.detail.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <span>
          <p className={textGrayStyle}>Ngày bắt đầu</p>
          <p className={dataStyle}>{obj.detail.trv.fromDate.split('T')[0]}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Ngày kết thúc</p>
          <p className={dataStyle}>{obj.detail.trv.toDate.split('T')[0]}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Số ngày</p>
          <p className={dataStyle}>{obj.detail.trv.amountDays}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Số người</p>
          <p className={dataStyle}>{obj.detail.trv.amountPersons}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Khuyễn mãi</p>
          <p className={dataStyle}>{obj.detail.trv.promotion === 0 ? 'None' : obj.detail.trv.promotion}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Địa chỉ Sales</p>
          <p className={dataStyle}>{obj.detail.trv.promotionAddress === '' ? 'None' : obj.detail.trv.promotionAddress}</p>
        </span>
      </div>
      {obj.detail.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}
    </>
  );
}

function PaymentTab({ obj = null, currentTab = null }) {
  if (currentTab !== 'payment') {
    return (<></>);
  }
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
  });
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  if (mediaQuery.matches) {
    return (
      <>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Trạng thái đơn</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordStatus}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày đặt đơn</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Khuyến mãi</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordDiscountAmount}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Đã trả</p>
            <p className={dataStyleMobile}>{formatter.format(obj.detail.orders.ordPaidMoney)}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tổng tiền</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordTotalQty}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Phuơng tiện</p>
            <p className={dataStyleMobile}>{obj.detail.orders.orderPaymentMethod}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số điên thoại</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordBillMobile}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tên</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordBillFirstName}</p>
          </span>
        </div>
        <div className="grid gap-6 mt-6">
          <span>
            <p className={textGrayStyle}>Địa chỉ 1</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordBillStreet1}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Email</p>
            <p className={dataStyleMobile}>{obj.detail.orders.ordBillEmail}</p>
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <span>
          <p className={textGrayStyle}>Trạng thái đơn</p>
          <p className={dataStyle}>{obj.detail.orders.ordStatus}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Ngày đặt đơn</p>
          <p className={dataStyle}>{obj.detail.orders.ordDate.split('T')[0]}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Khuyến mãi</p>
          <p className={dataStyle}>{obj.detail.orders.ordDiscountAmount}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Đã trả</p>
          <p className={dataStyle}>{formatter.format(obj.detail.orders.ordPaidMoney)}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Tổng tiền</p>
          <p className={dataStyle}>{obj.detail.orders.ordTotalQty}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Phuơng tiện</p>
          <p className={dataStyle}>{obj.detail.orders.orderPaymentMethod}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Số điên thoại</p>
          <p className={dataStyle}>{obj.detail.orders.ordBillMobile}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Tên</p>
          <p className={dataStyle}>{obj.detail.orders.ordBillFirstName}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Địa chỉ 1</p>
          <p className={dataStyle}>{obj.detail.orders.ordBillStreet1}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Email</p>
          <p className={dataStyle}>{obj.detail.orders.ordBillEmail}</p>
        </span>
      </div>
    </>
  );
}

function PersonDetail({ gender = null, fullName = null, dateOfBirth = null, passportCard = null, index = null }) {
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  if (mediaQuery.matches) {
    return (
      <div className="mt-3 pt-3 border-t">
        <div className="flex">
          <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
            {`Thông tin người ${index + 1}`}
          </h5>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Giới tính</p>
            <p className={dataStyleMobile}>{gender}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tên đầy đủ</p>
            <p className={dataStyleMobile}>{fullName}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày sinh</p>
            <p className={dataStyleMobile}>{dateOfBirth}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số hộ chiếu</p>
            <p className={dataStyleMobile}>{passportCard}</p>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-3 pt-3 border-t">
      <div className="flex">
        <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
          {`Thông tin người ${index + 1}`}
        </h5>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <span>
          <p className={textGrayStyle}>Giới tính</p>
          <p className={dataStyle}>{gender}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Tên đầy đủ</p>
          <p className={dataStyle}>{fullName}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Ngày sinh</p>
          <p className={dataStyle}>{dateOfBirth}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Số hộ chiếu</p>
          <p className={dataStyle}>{passportCard}</p>
        </span>
      </div>
    </div>
  );
}