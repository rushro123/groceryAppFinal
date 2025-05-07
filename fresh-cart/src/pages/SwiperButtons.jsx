import { useSwiper } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./swiperButton.module.css"
const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button className={styles.faright} onClick={() => swiper.slideNext()}><FaArrowRightLong /></button>;
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <button className={styles.faleft} onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>;
}

export  {SwiperButtonNext, SwiperButtonPrev};