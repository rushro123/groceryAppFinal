import React from "react";
import styles from "../styles/NavModal.module.css";
import { NavLink } from "react-router";
import { useMain } from "../context/MainContext";
import { RiCloseLine } from "react-icons/ri";
import { motion } from 'framer-motion';
const NavModal = () => {
  const { isModal, toggleModal } = useMain();
  return (
    <div className={`${styles.Modal} ${isModal&&styles.MainModal}`}>
      <div className={`${styles.ModalBody} `} onClick={toggleModal}>
      <div className={styles.modalNavHolder}>
          <div  className={styles.close} >
            <RiCloseLine onClick={()=>{toggleModal}} />
          </div>
        <nav className="tw:flex tw:w-[100%] tw:flex-col tw:gap-y-[1.5rem] tw:justify-center tw:items-center ">
          
          <NavLink className="tw:!text-[#000] tw:text-[1.5rem] " to="/">Home</NavLink>
          <NavLink className="tw:!text-[#000] tw:text-[1.5rem]" to="/shop"> Shop</NavLink>
          <NavLink className="tw:!text-[#000] tw:text-[1.5rem]" to="/about">About</NavLink>
          <NavLink className="tw:!text-[#000] tw:text-[1.5rem]" to="/contact">Contact</NavLink>
        </nav>
      </div>
      </div>
    </div>
    
  );
};

export default NavModal;
