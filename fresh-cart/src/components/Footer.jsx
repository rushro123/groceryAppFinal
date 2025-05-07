import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import styles from "../styles/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

import { NavLink } from "react-router";
const footerText = [
  {
    heading: "Know Us",
    lists: [
      "Order",
      "Status",
      "Products",
      "Deliveries",
      "Details",
      "Cancellation",
    ],
  },
  {
    heading: "Quick Links",
    lists: [
      "Payments",
      "Status",
      "Shipping Info",
      "Store Location",
      "Career",
      "Promotions",
    ],
  },
  {
    heading: "Help Center",
    lists: [
      "Store Information",
      "Our Team",
      "Our Subsidiaries",
      "Organic Farmers",
      "Best Products",
      "Advanced Search",
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerHolder}>
          <div className={styles.footerFlex}>
            <div
              className={`tw:flex tw:flex-col tw:gap-y-[2rem] ${styles.footItems}`}
            >
              <img
                className="tw:w-[5rem] tw:h-4rem tw:object-cover"
                src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745218350/Green_Elegant_Simple_Organic_Grocery_Logo__20250416_130135_0000-removebg-preview_pqtdru_pgs8sa.png"
              />
              <p className="tw:w-[70%] tw:text-[1.2rem]">
                Etiam facilisis leo vel fringilla est ullamcorper eget nulla
                facilisi.
              </p>
            </div>
            {footerText.map((item, index) => (
              <div
                key={index}
                className={`tw:flex tw:flex-col tw:gap-y-[2rem] ${styles.footItems}`}
              >
                <h3 className="tw:text-[1.5rem]">{item.heading}</h3>
                <ul className="tw:flex tw:flex-col tw:gap-y-[.5rem]">
                  {item.lists.map((list, index) => {
                    return <li key={index} className="tw:text-[1.2rem]">{list}</li>;
                  })}
                </ul>
              </div>
            ))}
            <div
              className={`tw:flex tw:flex-col tw:gap-y-[2rem] ${styles.footItems}`}
            >
              <h3 className="tw:text-[1.5rem]">Our Address</h3>
              <ul className="tw:flex tw:flex-col tw:gap-[.5rem]">
                <li className="tw:flex tw:text-[1.2rem]">
                  <FaLocationDot />{" "}
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </li>
                <li className="tw:flex tw:text-[1.2rem]">
                  <FaPhoneAlt /> <p>000 - 123 - 456789</p>
                </li>
                <li className="tw:flex tw:text-[1.2rem]">
                  <IoMail /> <p>info@example.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.footerNavHolder}>
            <div className="tw:flex tw:gap-x-[.5rem]">
              <NavLink className={"tw:text-[1.5rem] tw:border-r-[1px] tw:border-[#fff] tw:!p-[.5rem]"}>Home</NavLink>{" "}
              <NavLink className={"tw:text-[1.5rem] tw:border-r-[1px] tw:border-[#fff] tw:!p-[.5rem]" }>Shop</NavLink>{" "}
              <NavLink className={"tw:text-[1.5rem] tw:border-r-[1px] tw:border-[#fff] tw:!p-[.5rem]"}>About</NavLink > <NavLink className={"tw:text-[1.5rem]  tw:border-[#fff] tw:!p-[.5rem]"}>Contacts</NavLink>
            </div>
            <div className={styles.footerIconHolder}>
              <FaFacebookF />
              <FaPinterestP />
              <FaInstagram />
              <TfiYoutube />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
