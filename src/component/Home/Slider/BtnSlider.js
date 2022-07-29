import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "flex  cursor-pointer mt-1/2 ml-auto"
        : "flex  cursor-pointer mt-1/2 mr-auto"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} className="w-5 h-5 pointer-events-none" />
    </button>
  );
}
