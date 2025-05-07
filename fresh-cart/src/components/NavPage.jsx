import React from "react";
import styles from "./Nav.module.css";
const NavPage = ({location}) => {
  return (
    <div className="tw:w-[100vw] tw:overflow-x-hidden  tw:h-[auto]">
      <div className={`${styles.background} tw:relative tw:!py-[10rem]`}>
        <img
          src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1746421957/AdobeStock_277541354_2x_7a88bb62-ff14-4c8e-a761-ba8fd94ab7f5_ltzyqw.webp"
          alt="background stock img"
          
          className="tw:w-[100%]   tw:h-[100%] tw:object-cover tw:object-center tw:rounded-lg tw:absolute tw:top-0 tw:left-0 tw:-z-10"
        />
        <div className="tw:relative tw:p-[1rem] tw:flex tw:flex-col tw:gap-[1rem] tw:justify-center tw:items-center ">
            <h3 className="tw:text-[3rem] tw:uppercase">{location}</h3>
            <p className="tw:text-[2rem] tw:capitalize">Home/{location}</p>
            
        </div>
      </div>
    </div>
  );
};

export default NavPage;
