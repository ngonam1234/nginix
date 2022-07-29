import React from 'react';
import styles from './style.module.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import napas from '../../Purchase/PurchaseBody/img/icon-payment-napas.png';
import paypal from '../../Purchase/PurchaseBody/img/icon-payment-paypal.png';
import momo from '../../Purchase/PurchaseBody/img/icon-payment-MoMo.png';
import vnpay from '../../Purchase/PurchaseBody/img/icon-payment-vnpay.png';

const Hero = () => {
  return (
    <>
      <div className="relative w-full mx-auto pt-40 pb-80 -mt-20 px-6 bg-gradient-to-b from-blue-300 to-indigo-50 overflow-hidden">
        <div className="w-full sm:flex sm:flex-col lg:flex-row xl:grid xl:grid-cols-7">
          <div className="xl:col-span-4 lg:pr-40 lg:m-0 relative flex flex-col justify-center items-end m-auto mb-20">
            <div className="max-w-xl font-sans text-gray-800">
              <div className="text-2xl">
                <p className="sm:text-4xl font-bold text-gray-800">
                  Sàn thương mại

                  <span className="inline-block text-indigo-800">
                    &nbsp;thông minh
                  </span>
                </p>
                <p className="sm:text-4xl font-bold text-gray-800">
                  Mua bán dịch vụ bảo hiểm
                  <span className=" text-indigo-800">
                    &nbsp;uy tín
                  </span>
                </p>
              </div>
              <div className="flex my-4">
                <img src={napas} className="h-8" />
                <img src={paypal} className="h-8 ml-6" />
                <img src={vnpay} className="h-8  ml-6" />
              </div>
              <p className="mb-6">
                Sàn thương mại điển tử thông minh S-market là nền tảng bảo hiểm dành cho khách hàng. Chúng tôi kết nối với các công ty bảo hiểm hàng đầu tại Việt Nam để mang lại sản phẩm bảo hiểm tốt nhất cho cá nhân, gia đình và doanh nghiệp.  Giờ đây việc tham gia bảo hiểm chưa bao giờ dễ dàng hơn thế.
              </p>
              <div className="sm:flex">
                <div className= "mb-2 sm:mr-6">
                  <a href="#san_pham">
                    <button
                      className="px-5 py-3 w-full sm:w-auto rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
                      aria-label="show notifications"
                    >
                      Xem sản phẩm
                    </button>
                  </a>
                </div>
                <div>
                  <a href="#doi_tac">
                    <button
                      className="px-5 py-3 w-full sm:w-auto rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
                      aria-label="show notifications"
                    >
                      Thông tin đối tác
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative xl:col-span-2 pb-80 ml-28 lg:ml-0">
            <div className="absolute rounded-lg bg-scroll top-2 -left-32 h-80 w-96 bg-left-top bg-no-repeat bg-contain" style={{ backgroundImage: `url(${img1})` }}>
            </div>
            <div className="absolute rounded-lg bg-scroll -top-14 left-72 h-80 w-96 bg-left-top bg-no-repeat bg-contain" style={{ backgroundImage: `url(${img2})` }}>
            </div>
            <div className="absolute rounded-lg bg-scroll top-72 -left-16 h-80 w-96 bg-left-top bg-no-repeat bg-contain" style={{ backgroundImage: `url(${img3})` }}>
            </div>
            <div className="absolute rounded-lg bg-scroll top-60 left-72 h-80 w-96 bg-left-top bg-no-repeat bg-contain" style={{ backgroundImage: `url(${img4})` }}>
            </div>
            <div className="absolute mt-3 ml-3 top-2 -left-32 w-96 h-64 border-b-4  border-white"></div>
            <div className="absolute mt-1 -ml-5 -top-6 left-72 w-96 h-64 border-b-4 border-l-4 border-white"></div>
            <div className="absolute -mt-3 ml-3 top-72 -left-16 w-80 h-80 border-white"></div>
            <div className="absolute -mt-2 -ml-5 top-60 left-72 w-80 h-80 border-t-4 border-l-4 border-white"></div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Hero;