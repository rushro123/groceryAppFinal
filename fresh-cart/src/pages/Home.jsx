import React from 'react'
import { useMain } from '../context/MainContext.jsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import CardMain from '../components/CardMain.jsx';
import CardSub from '../components/CardSub.jsx';

// import required modules
const Home = () => {
  const swiper=useSwiper();
  const {isUser}=useMain()
  
  console.log(isUser)
  return (
   
    <div>
      <CardMain />
      <CardSub />
    </div>
    
      
    
  );
}


export default Home