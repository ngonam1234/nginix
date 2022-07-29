import React, { useState } from 'react';
import dataSlider from './dataSlider';
import { Link } from 'react-router-dom';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="relative bg-gray-200 w-full mx-auto"
    style={{height: "80vh"}}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "opacity-1 transition duration-500 ease-in"
              : "absolute opacity-0"}
          >
            <img
              className="absolute -top-16 object-cover mx-auto w-screen"
              // eslint-disable-next-line
              style={{height: "87vh"}}
              src={obj.url}
            />
            {/* <div className="block absolute bottom-0.5 ml-40 w-full top-1/4">
              <p className="text-gray-900 text-2xl my-2 font-bold ">{obj.title}</p>
              <Link to={"/products/" + obj.name} className="cursor-pointer font-medium hover:text-gray-600">view products</Link>
            </div> */}
          </div>

        );
      })}
      {/* <div className="bg-cover bg-red-200 bg-right w-full h-full">
            <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')"}}>
            <div className="mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                </div>
            </div>

            </div>
        </div> */}

      {/* <div class="flex absolute w-screen inset-y-1">
            <button
                onClick={prevSlide}
                className="hover:bg-gray-200 bg-white items-center justify-center cursor-pointer mr-auto ml-4 top-1/2 h-8 w-8 my-auto rounded-full"
                >
                <img src={leftArrow} className="w-5 h-5 pointer-events-none pl-2"/>
            </button>
            <button
                onClick={nextSlide}
                className="hover:bg-gray-200 bg-white items-center justify-center cursor-pointer ml-auto mr-4 h-8 w-8 my-auto rounded-full"
                >
                <img src={rightArrow} className="w-5 h-5 pointer-events-none pl-2"/>
            </button>
        </div>     */}
      <div className="flex absolute bottom-0.5 left-1/2 transform -translate-x-1/2">
        <button onClick={() => moveDot(1)} className="animate-pulse cursor-pointer block text-4xl text-gray-400 hover:text-gray-900 focus:outline-none">•</button>
        <button onClick={() => moveDot(2)} className="animate-pulse cursor-pointer block text-4xl text-gray-400 hover:text-gray-900 focus:outline-none">•</button>
        <button onClick={() => moveDot(3)} className="animate-pulse cursor-pointer block text-4xl text-gray-400 hover:text-gray-900 focus:outline-none">•</button>
      </div>
    </div>
  );
}
