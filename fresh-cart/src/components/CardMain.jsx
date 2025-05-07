import {useRef} from "react";
import styles from "./cardMain.module.css";
import cardBg1 from "../../../final-project-home/Artboard_1.jpg";
import cardBg2 from "../../../final-project-home/Artboard_2.jpg";
import cardBg3 from "../../../final-project-home/Artboard_3.jpg";
import { motion } from "motion/react";
import { PiGrainsBold } from "react-icons/pi";
import { LiaLeafSolid } from "react-icons/lia";
import { SiOrganicmaps } from "react-icons/si";
import { LuHandHeart } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DATA from "../DATA.js";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const cardData = [
  {
    tag: "BLACKBUSTER OFFER",
    title: "ORGANIC VEGETABLES",
    price: 100,
    img: cardBg1,
  },
  {
    tag: "BLACKBUSTER OFFER",
    title: "ORGANIC VEGETABLES",
    price: 100,
    img: cardBg2,
  },
  {
    tag: "BLACKBUSTER OFFER",
    title: "ORGANIC VEGETABLES",
    price: 100,
    img: cardBg3,
  },
];
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} style={{opacity:onClick===null?".5":"1"}}  className={`tw:w-[2rem] tw:h-[2rem] tw:cursor-pointer tw:-z-[-100]  tw:block tw:!bg-[transparent] tw:absolute tw:right-[4rem] tw:md:right-[-2rem] tw:top-[50%] tw:translatex-[-50%]`} >
      <IoIosArrowForward onClick={onClick} className="tw:w-[100%]  tw:-z-30 tw:h-[100%] tw:fill-[#000] tw:block tw:opacity-[90%]" />
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div style={{opacity:onClick===null?".5":"1"}} onClick={onClick} className="tw:w-[2rem] tw:cursor-pointer tw:h-[2rem] tw:-z-[-100] tw:block  tw:!bg-[transparent] tw:absolute tw:left-[4rem] tw:md:left-[-2rem] tw:top-[50%] tw:translatex-[50%]" >
      <IoIosArrowBack onClick={onClick}  className="tw:fill-[#000] tw:w-[100%] tw:h-[100%] tw:block tw:opacity-[90%]"/>
    </div>
  )
}
const products=DATA.product
const CardMain = () => {
  const sliderRef = useRef(null);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow:<SamplePrevArrow to="prev"/>,
    prevArrow: <SampleNextArrow to="next"/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots:false
        }
      },
      
    ]
  };
  
  return (
    <main>
      <div className={styles.outerCardHolder}>
        <div className={styles.cardHolder}>
          {cardData.map((item, index) => (
            <motion.div
              initial={
                index % 2 == 0
                  ? { y: "100px", opacity: "10%" }
                  : { y: "-100px", opacity: "0%" }
              }
              whileInView={{ y: "0px", opacity: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="tw:card  tw:bg-base-100  tw:w-[100%]  tw:!p-[3rem] t tw:relative"
              key={index}
            >
              <figure className="tw:absolute tw:w-[100%] tw:h-[100%] tw:top-0 tw:left-0">
                <img
                  className="tw:w-[100%] tw:h-[100%] tw:z-2 tw:object-cover"
                  src={item.img}
                  alt="img-artbox"
                />
              </figure>
              <div className="tw:card-body tw:relative tw:z-10 tw:w-[65%]">
                <h3 className="tw:card-title tw:text-[1.8rem] tw:text-theme-color">
                  {item.title}
                </h3>
                <p className="tw:text-[1.2rem] tw:text-theme-2">{item.tag}</p>
                <div className="tw:card-actions tw:justify-start">
                  <button className="tw:btn tw:bg-succes tw:text-[1.3rem] tw:hover:!bg-succes-hover tw:!px-[.5rem] tw:!py-[1rem] tw:text-[#fff]">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.bannerHolderMain}>
        <div className={styles.bannerHolder}>
          <motion.div
            initial={{ y: "50px", opacity: "10%" }}
            whileInView={{ y: "0px", opacity: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={styles.bannerImgHolder}
          >
            <img
              className="tw:w-[100%] tw:h-[auto] tw:object-cover"
              src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_243005997_copy_2x_0ad1cd46-818a-4e26-89e0-b8c598eae431.png?v=1673620948"
            />
          </motion.div>
          <motion.div
            initial={{ y: "100px", opacity: "10%" }}
            whileInView={{ y: "0px", opacity: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="tw:flex tw:flex-col tw:gap-[2rem] tw:align-center"
          >
            <div className="tw:flex tw:flex-col tw:gap-[1rem]  tw:justify-center tw:items-start tw:mt-[2rem]">
              <h2 className="tw:text-[4rem] tw:sm:text-[2rem] tw:w-[100%] tw:break-words">
                Organic.Healthy.Natural
              </h2>
              <h3 className="tw:text-[2rem]">
                Fresh Vegetable Is Ready For Your Delivery
              </h3>
              <p className="tw:text-[1.2rem]">
                Sollicitudin tempor id eu nisl nunc. Fermentum dui faucibus in
                ornare quam viverra. Volutpat ac tincidunt vitae semper quis
                lectus nulla.
              </p>
            </div>
            <div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:gap-[1rem] tw:text-[1.5rem]">
              <div className="tw:flex tw:flex-row  tw:justify-start tw:items-center tw:gap-[1rem] tw:hover:text-theme-color tw:transition tw:duration-500">
                {" "}
                <LiaLeafSolid /> <span>Organic Farming</span>
              </div>
              <div className="tw:flex tw:flex-row  tw:justify-start tw:items-center tw:gap-[1rem] tw:hover:text-theme-color tw:transition tw:duration-500">
                <SiOrganicmaps /> <span>No Chemical Fertilizer</span>
              </div>

              <div className="tw:flex tw:flex-row  tw:justify-start tw:items-center tw:gap-[1rem] tw:hover:text-theme-color tw:transition tw:duration-500">
                <PiGrainsBold /> <span> 100% Natural Products</span>
              </div>
              <div className="tw:flex tw:flex-row  tw:justify-start tw:items-center tw:gap-[1rem] tw:hover:text-theme-color tw:transition tw:duration-500">
                <LuHandHeart /> <span>Best Quality Vegetables</span>
              </div>

              <div>
                <button className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">
                  Shop all
                </button>
              </div>
              <div> </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.collection}>
        <div className={styles.collectionHolder}>
          <div className="tw:flex tw:w-[100%] tw:flex-row  tw:justify-between tw:items-center">
            {" "}
            <div className="tw:flex tw:flex-row tw:items-center tw:gap-[.5rem]">
              <img src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745327651/Group_8424_vmwu5a.webp" />{" "}
              <span className=" tw:text-[1.5rem] tw:text-succes tw:font-bold">
                Our Collection
              </span>
            </div>{" "}
            <a className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">
              view all wittems
            </a>
          </div>
          <div className="tw:w-[100%]">
          <Slider ref={sliderRef} {...settings} >
            {
              products.map((item=>{
                return(<div key={item.id}>
                  <div className="tw:w-[80%] tw:md:w-[100%]  tw:h-[auto]" style={{margin:"0 auto"}}>
                    <img className="tw:w-[100%]  tw:object-cover" src={item.img} />
                  </div>
                  <h3>{item.title}</h3>
                </div>)
              }))
            }     
          </Slider>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default CardMain;
