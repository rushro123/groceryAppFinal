import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonPrev, SwiperButtonNext } from "../pages/SwiperButtons.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import bg1 from "../../../final-project-home/Namm_Organic_Slider_3.webp";
import bg2 from "../../../final-project-home/Artboard_1_bdbe731b-7e12-48df-8adf-9c91459a49aa.webp";
import bg3 from "../../../final-project-home/AdobeStock_277541354_2x_9a689b4c-2bba-4e81-b8ce-c54bc7d2e53e.webp";
import { NavLink } from "react-router";
import styles from "./Nav.module.css";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import NavBar from './NavBar.jsx'
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import DATA from "../DATA.js";
import { useRef, useState,useEffect } from "react";
// Import Swiper React components

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
const SwiperHead = () => {
  const swiper = useSwiper();
  const slides = [bg1, bg2, bg3];
  const [stickyClass, setStickyClass] = useState(false);
  const myRef=useRef()
  useEffect(() => {
    const observer=new IntersectionObserver((entries)=>{
      const entry =entries[0];
      console.log( 'entry',entry)
    })
    observer.observe[myRef.current]
  }, []);
  // const stickyNavbar=()=>{
  //   if (window.pageYOffset > 200) {
  //     setStickyClass(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // }
  return (
    <div  className={styles.background}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        slideToClickedSlide={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[EffectFade, Navigation, Autoplay]}
        // className="mySwiper"
        // ref={myRef}
        style={{backgroundImage:"rgba(green,0.5)"}}

      >
        {/* <div  className={`${styles.swiperNav} `} style={{position:stickyClass ? "sticky" : "relative"}}>
          <div className={styles.logo}>
            <img
              className=""
              src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745218350/Green_Elegant_Simple_Organic_Grocery_Logo__20250416_130135_0000-removebg-preview_pqtdru_pgs8sa.png"
            />
          </div>
          <div className={styles.mainNav}>
            <div className="tw:block tw:lg:hidden tw:w-[2rem]">
              <RxHamburgerMenu className="tw:w-[100%] tw:h-auto" />
            </div>
            <nav className={styles.navLinks}>
              <NavLink
                s
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.links
                }
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.links
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.links
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </nav>
            <div >
              <CiSearch className="tw:block tw:lg:hidden" />
              <div className={styles.search}>
              <input type="text" placeholder="Type here" />
              <button>SEARCH</button>
              </div>
              
            </div>
            <div className="tw:flex tw:flex-row tw:gap-[.5rem] tw:items-center">
              <FaHeart /> <span className="tw:hidden tw:md:block">wishlist</span>
            </div>
            <div className="tw:flex tw:flex-row tw:gap-[.5rem] tw:items-center">
              <FaUser /> <span className="tw:hidden tw:md:block">Register/login</span>
            </div>
          </div>
        </div> */}
        
        <SwiperButtonPrev>Prev</SwiperButtonPrev>
        <SwiperButtonNext>Next</SwiperButtonNext>

        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ position: "relative" }}>
            <img src={slide} alt="img" />
            <div className="tw:flex tw:flex-col tw:absolute tw:top-[50vh] tw:left-[50%] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:gap-[1rem] tw:z-40">
              <div className="tw:flex tw:flex-col tw:gag-[1.5rem] tw:items-center tw:justify-center">
                <h2 className="tw:size tw:text-[3rem] ">
                  shop healthy food
                </h2>
              </div>
              <div className="tw:flex tw:flex-row tw:gap-[1rem] tw:justify-center tw:items-center">
                <button className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:delay-[.5s] tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">shop veg</button>{" "}
                <button className="tw:!px-[2rem] tw:!py-[.75rem] tw:text-[1.2rem] tw:transition tw:delay-[.5s] tw:ease-in  tw:bg-theme-2 tw:hover:bg-theme-color tw:text-[#fff] tw:cursor-pointer">
                  shop fruits
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHead;
