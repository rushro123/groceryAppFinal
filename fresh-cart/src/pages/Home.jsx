import React from 'react'
import DATA from '../DATA.js'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {SwiperButtonPrev,SwiperButtonNext} from './SwiperButtons.jsx'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import bg1 from "../../../final-project-home/1.png"
import bg2 from "../../../final-project-home/2.png"
import bg3 from "../../../final-project-home/3.png"
import CardMain from '../components/CardMain.jsx';
import CardSub from '../components/CardSub.jsx';

// import required modules
const Home = () => {
  const swiper=useSwiper();
  const slides=[
    bg1,bg2,bg3
  ]
  return (
   
    <div>
      <CardMain />
      <CardSub />
    </div>
    
      
    
  );
}


export default Home