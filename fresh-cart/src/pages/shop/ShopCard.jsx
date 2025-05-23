import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/Shop.module.css";
import api from "../../axios";
import { useMain } from "../../context/MainContext";
import { toast } from "react-toastify";
const ShopCard = (product, key) => {
  const {setIsProductUpdated}=useMain
  const [isHover, setIsHover] = useState(false);
  const item = product.item;
  const send={title:item.title,quantity:1,price:item.price,category:item.category,img:item.img}
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  // useEffect(() => {
  //     console.log(isHover)
  // },[isHover])
  const addItemToCatrt=async () => {
    try {
      console.log(item)
      console.log(send)
      const res= await api.post(`/cart`, {...send});
      if(res.status ===201){
        toast.success("item added to cart", {
          position: 'top-center',
          autoClose: 3000,
        });
      }
      console.log(res.status)
      setIsProductUpdated(prev=>!prev)
    } catch (error) {
      if(error.status ===401){
        toast.warn("item allready exist in cart", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      console.log(error)
    }
  }

  return (
    <div
      className="tw:card tw:bg-base-100 tw:w-[auto] tw:shadow-sm tw:!pb-[1rem]"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <figure className="tw:relative tw:overflow-hidden">
        <img
        // https://res.cloudinary.com/dpfspbjyk/image/upload
          src={`${item.img}`}
          alt="Shoes"
          className="tw:rounded-xl tw:w-[auto] tw:h-[15rem] tw:object-cover"
        />
        <div
          className={`${styles.overlay} ${
            isHover ? styles.overlayVisible : " "
          }`}
        >
          <div className="tw:flex tw:justify-center tw:items-center tw:gap-[1rem] tw:!cursor-pointer">
            <FaRegHeart fill="#fff" className="tw:bg-[#3f730a] tw:!p-[.5rem] tw:w-[2.5rem] tw:h-[auto] tw:transition tw:duration-[.3s] tw:hover:scale-[1.1]" />{" "}
            <FaSearch fill="#fff" className="tw:bg-[#3f730a] tw:!p-[.5rem] tw:w-[2.5rem] tw:h-[auto] tw:transition tw:duration-[.3s] tw:hover:scale-[1.1]" />
          </div>
        </div>
      </figure>
      <div className="tw:card-body tw:items-center tw:text-center tw:!py-[1rem]">
        <h3 className="tw:card-title tw:text-[#000]">{item.title}</h3>
        <p className="tw:text-[#000]">{item.price} &#8377;</p>
        <div className="tw:card-actions">
          <button onClick={addItemToCatrt} className="tw:btn tw:transition-all tw:duration-[.3s] tw:bg-[#fff] tw:border-[#00000066] tw:!p-[.5rem] tw:!px-[1rem] tw:hover:bg-[#ff7d09] tw:hover:text-[#fff] ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
