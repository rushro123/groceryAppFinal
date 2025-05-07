import React, { useEffect, useRef, useState,useLayoutEffect } from 'react'
import { NavLink } from "react-router";
import styles from "./Nav.module.css";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useScroll, useTransform, motion } from 'framer-motion';
    // import React, { useRef } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useMain } from '../context/MainContext';
const NavBar = () => {
  const [isSticky,setIsSticky]=useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { isModal, toggleModal } = useMain();
  const scrollTracker=()=>{
    const currentScrollPos = window.scrollY;
    setIsSticky(prevScrollPos < currentScrollPos && currentScrollPos >= 500)
    setPrevScrollPos(currentScrollPos);
    // if (window.pageYOffset > 500) {
    //   setIsSticky(true);
    // } else {
    //   setIsSticky(false);
    // }
   
  }
  useEffect(()=>{

    // console.log(window)
   
    
    window.addEventListener('scroll' ,scrollTracker ,true)
    return () => {
      window.removeEventListener('scroll', scrollTracker,true);
    };
    
  // const observer=new IntersectionObserver((entries)=>{
  //     console.log(entries)
  // })
  // observer.observe(myRef.current)
  },[prevScrollPos,isSticky])
  // console.log(isSticky)
  
  return (
    <div  className={isSticky ? styles.stickyNav:styles.swiperNav} >
          <div className={styles.logo}>
            <img
              className=""
              src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745218350/Green_Elegant_Simple_Organic_Grocery_Logo__20250416_130135_0000-removebg-preview_pqtdru_pgs8sa.png"
            />
          </div>
          <div className={styles.mainNav}>
            <div className="tw:block tw:lg:hidden tw:w-[2rem]" onClick={toggleModal}>
              <RxHamburgerMenu className="tw:w-[100%] tw:h-auto" />
            </div>
            <nav className={styles.navLinks}>
              <NavLink
                
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.links
                }
              >
                Home
              </NavLink>
              <NavLink
                
                to="/shop"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.links
                }
              >
                Shop
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
        </div>
  )
}

export default NavBar