import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import { Link } from "react-router-dom";
import TravelInsuranceProduct from "./TravelInsuranceData";
import HealthInsuranceProduct from "./HealthInsuranceData";
import CarInsuranceProduct from "./CarInsuranceData";
// const products = [
//     {
//       id: 1,
//       name: 'Metlife',
//       href: '../Product/Product.js',
//       imageSrc: 'http://www.metlife.com/content/dam/metlifecom/us/social-share/metlife-logo-share.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '***',
//       color: 'Detail',
//     },
//     {
//         id: 2,
//       name: 'Chubb',
//       href: 'https://www.chubb.com/vn-en/personal/travel-insurance.html',
//       imageSrc: 'https://www.tennisworldusa.org/imgb/95480/chubb-is-the-official-insurance-sponsor-of-the-us-open.jpg',
//       imageAlt: "Front of men's Basic Blazer in black.",
//       price: '***',
//       color: 'Detail',
//     },
//     {
//       id: 3,
//     name: 'HSBC',
//     href: 'https://www.hsbc.com.vn/en-vn/insurance/products/travel-care/',
//     imageSrc: 'https://cdn.hsbc.com.vn/etc/designs/dpws/common/social/logo/Square-1200x1200px.jpg',
//     imageAlt: "Front of men's Basic Blazer in black.",
//     price: '***',
//     color: 'Detail',
//   }
// //   {
// //     id: 4,
// //   name: 'BaoViet Insurance',
// //   href: 'https://www.baoviet.com.vn/insurance/Khach-hang-ca-nhan/Bao-hiem-du-lich-quoc-te/GeneralLandingPage/34/',
// //   imageSrc: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/03/22/58d1e7554cb51_1490151253.jpg',
// //   imageAlt: "Front of men's Basic Blazer in black.",
// //   price: '***',
// //   color: 'Detail',
// // }
//     // More products...
//   ];

const Items = ({ name = null, data = null }) => {
  return (
    <section className="px-6 lg:-ml-6">
      <h2 className="text-2xl mx-auto font-bold tracking-tight text-gray-800">
        {name}
      </h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((product) => (
          <Link key={product.id} to={`../products/${product.name}`}>
            <div key={product.id} className="flex flex-col group shadow-lg rounded-lg bg-white transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-105 hover:opacity-70">
              <div className="">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-top object-contain w-full sm:h-40 lg:h-52 xl:h-72"
                />
              </div>
              <div className="mx-auto my-4 ">
                <h3 className="sm:text-base md:text-lg xl:text-xl text-black font-medium font-sans subpixel-antialiased">
                  {product.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const ListInsurance = () => {
  const buttonRef = useRef();
  return (
    <div className="bg-gray-50 mx-auto -mt-10 ">
      <div className="mx-auto py-8 mt-10 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" id="san_pham">
        <Items name="Travel Insurance" data={TravelInsuranceProduct}/>
        <br />
        <Items name="Health Insurance" data={HealthInsuranceProduct}/>
        <br />
        <Items name="Car Insurance" data={CarInsuranceProduct}/>
        <br />
        {/* content */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid  gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center mx-auto md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points=" 8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6" id="doi_tac">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Bạn muốn trở thành một
                  <span className="inline-block text-indigo-700">
                    &nbsp;đối tác ?
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  S-market cung cấp các dịch vụ tích hợp sản phẩm, quảng bá sản phẩm với một mức phí phải chăng. Hãy đưa sản phẩm của bạn lên sàn thương mại điện tử thông minh với một nút bấm !
                </p>
              </div>
              <div>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center text-indigo-500 font-semibold transition-colors duration-200 text-deep-purple-accent-400  hover:text-deep-purple-800"
                >
                  Tìm hiểu thêm
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Button show more */}
        <div>
          <Button
            color="lightBlue"
            ref={buttonRef}
            ripple="light"
            className="mx-auto"
          >
            Liên hệ
          </Button>

          <Popover placement="top" ref={buttonRef}>
            <PopoverContainer>
              <PopoverHeader></PopoverHeader>
              <PopoverBody>BLACKPINK in your area!</PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>

      </div>
    </div>
  );
};

export default ListInsurance;
