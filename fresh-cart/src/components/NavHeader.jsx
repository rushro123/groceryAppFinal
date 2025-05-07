import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import india from "../../../final-project-home/india-flag-icon.svg";
import Nav from "./Nav.jsx";
import { NavLink } from "react-router-dom";
import NavPage from "./NavPage.jsx";
// import NavBar from "./NavBar.jsx";
import styles from "./navheader.module.css";
import NavBar from "./NavBar.jsx";
import { useLocation } from 'react-router-dom';
const NavHeader = () => {
  const location = useLocation();
  
  const path=location.pathname.split("/")[1];
  
  return (
    <div className={styles.NavHeader}>
      {/* <FaHeadphonesSimple /> */}
      <div className={styles.headerNav}>
        <ul>
          <li><FaHeadphonesSimple /> <span >1234456901</span></li>
          <li><IoIosMailOpen /> <span>1234@gmail.com</span></li>
        </ul>
        <ul>
             <li><img src={india} alt="flag" /> <span>india</span> </li>
             <li> <NavLink to="/cart"><FaBagShopping /></NavLink> </li>
        </ul>
      </div>
      {/* <div>
        <NavBar />
      </div> */}
      <div className="tw:w-[100vw] tw:overflow-x-hidden">
        {location.pathname=="/"? <Nav></Nav>:<NavPage location={path}></NavPage>}
      </div>
    </div>
  );
};

export default NavHeader;
