import React, { useEffect, useState } from 'react';
import ProductPriceForm from './ProductPriceForm';
// rface

const contentTextStyle = "text-sm text-gray-900";

const ProductDetail = ({ match }) => {
  const [successDisp, setSuccessDisp] = useState(false);
  useEffect(() => {
    // console.log(match.params.productName);
  }, []);
  return (
    <div className=" w-full px-4 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:mb-20">
      <div className=" grid row-gap-8 lg:grid-cols-6 ">
        <div name="leftCard" className="flex flex-col lg:col-span-4">
          <div className="bg-white rounded p-4 lg:border">
            <div className="max-w-2xl mb-6 bg-white rounded-lg">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Gói bảo hiểm bao gồm
              </h2>
              {/* <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis
              </p> */}
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div className="bg-white rounded-lg">
                <div className=" flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <div className="">
                  <h6 className="mb-2 font-semibold leading-5">
                    Miễn phí đổi giờ, huỷ chuyến
                  </h6>
                  <p className={contentTextStyle}>
                    Miễn phí đổi giờ, huỷ chuyến trong vòng 48 tiếng thông báo
                    với hãng. Chúng tôi cam kết chi trả các loại phí phát sinh
                    cho vấn đề này
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <div className="">
                  <h6 className="mb-2 font-semibold leading-5">
                    Hỗ trợ phí hành lý khi check-in
                  </h6>
                  <p className={contentTextStyle}>
                    Chúng tôi sẽ chi trả phí phát sinh khi hành lý của bạn quá
                    tải trong quá trình check-in. Hãy yên tâm sắp xếp hành lý,
                    việc tính phí cứ để chúng tôi lo!
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <div className="">
                  <h6 className="mb-2 font-semibold leading-5">
                    Chi trả 100% phí khám chữa bệnh khi tai nạn
                  </h6>
                  <p className={contentTextStyle}>
                    Hãy yên tâm khởi hành. Nếu không may gặp phải bất kỳ tai nạn nào trong suốt hành trình, chúng tôi sẽ luôn ở bên bạn và
                    thực hiện chi trả phí khám chữa bệnh theo đúng quy định

                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <div className="">
                  <h6 className="mb-2 font-semibold leading-5">
                    Chi trả 100% phí pháp lý
                  </h6>
                  <p className={contentTextStyle}>
                    Gặp phải vấn đề về pháp lý khi va chạm ngoài đường? Không
                    cần lo lắng, chúng tôi sẽ đảm bảo cho bạn về mặt pháp lý.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="text-2xl mt-6 mb-6 font-bold ">Yêu cầu giấy tờ</h4>
            <ul className="list-disc list-inside leading-relaxed bg-white rounded-lg">
              <li>
                <p className={`inline pl-3 ${contentTextStyle}`}>CMND/CCCD</p>
              </li>
              <li>
                <p className={`inline pl-3 ${contentTextStyle}`}>
                  Lịch trình chuyến đi
                </p>
              </li>
              <li>
                <p className={`inline pl-3 ${contentTextStyle}`}>Vé tàu xe</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <ProductPriceForm match={match} setSuccessDisp={setSuccessDisp} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
