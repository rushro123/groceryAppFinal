import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

 
 

export const NextArrowWrapper=({chldren})=>{
  const onNextClick = () => {
    sliderRef.current.slickNext();
   };
  return(
    <div  onClick={onNextClick}>
      {chldren}
    </div>
  )
}
export const PrevArrowWrapper=({chldren})=>{
  const onPreviousClick = () => {
    sliderRef.current.slickPrev();
   };
  return(
    <div  onClick={onNextClick}>
      {chldren}
    </div>
  )
}