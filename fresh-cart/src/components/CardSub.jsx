import Slider from "react-slick";
import styles from "./cardSub.module.css";
import { delay, motion } from "motion/react";
import DATA from "../DATA.js";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";
import "./cardSub1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/customSwiper.css"
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ opacity: onClick === null ? ".5" : "1" }}
      className={`tw:w-[2rem] tw:h-[2rem] tw:cursor-pointer tw:-z-[-20]  tw:block tw:!bg-[transparent] tw:absolute tw:right-[2rem] tw:md:right-[2rem] tw:top-[50%] tw:translatex-[-50%]`}
    >
      <IoIosArrowForward
        onClick={onClick}
        className="tw:w-[100%]  tw:-z-30 tw:h-[100%] tw:fill-[#000] tw:block tw:opacity-[90%]"
      />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      style={{ opacity: onClick === null ? ".5" : "1" }}
      onClick={onClick}
      className="tw:w-[2rem] tw:cursor-pointer tw:h-[2rem] tw:-z-[-20] tw:block  tw:!bg-[transparent] tw:absolute tw:left-[2rem] tw:md:left-[2rem] tw:top-[50%] tw:translatex-[50%]"
    >
      <IoIosArrowBack
        onClick={onClick}
        className="tw:fill-[#000] tw:w-[100%] tw:h-[100%] tw:block tw:opacity-[90%]"
      />
    </div>
  );
}
const CardSub = () => {
  const products = DATA.product;
  const detailData = [
    {
      id: 1,
      title: "Fresh Products",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745423374/Group_7067_2x_80c69f0e-db61-467f-acad-305c0fd80eaf_izh04b.png",
      para: "Aenean tincidunt diam vestibulum Massa elementum porttitor.",
    },
    {
      id: 1,
      title: "Best Farmers",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745422176/support-icon_e7ynhn.png",
      para: "Aenean tincidunt diam vestibulum Massa elementum porttitor.",
    },
    {
      id: 2,
      title: "Chemical Free",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745422194/Group_7072_2x_fccf2763-7463-423f-a6ad-eee9b89a2c8b_mvpjla.png",
      para: "Aenean tincidunt diam vestibulum Massa elementum porttitor.",
    },
    {
      id: 3,
      title: "Free Deliveries",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745422224/Group_7076_2x_fb569931-0ed9-490c-947f-94d76f3b39df_nmgsul.png",
      para: "Aenean tincidunt diam vestibulum Massa elementum porttitor.",
    },
  ];
  const swiperData = [
    {
      id: 1,
      title: "joe",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745426014/home-testimonial4_nnqxpy.jpg",
      para: "Leo in vitae turpis massa sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus sit amet luctus venenatis. Vel pretium lectus quam id leo in. ",
    },
    {
      id: 2,
      title: "nicholas",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745426004/home-testimonial3_a3j0y8.jpg",
      para: "Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Est pellentesque elit ullamcorper dignissim cras. Viverra suspendisse potenti nullam ac tortor vitae.",
    },
    {
      id: 3,
      title: "lisha",
      img: "https://res.cloudinary.com/dpfspbjyk/image/upload/v1745425991/home-testimonial2_uctsqi.jpg",
      para: "Leo in vitae turpis massa sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus sit amet luctus venenatis. Vel pretium lectus quam id leo in.",
    },
    
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow to="prev" />,
    prevArrow: <SampleNextArrow to="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="tw:flex tw:flex-col tw:w-[100%] tw:gap-[2rem] tw:items-stretch">
      <div
        className={`tw:flex tw:flex-col tw:w-[100%] tw:py-[2rem] tw:px-0 tw:justify-center tw:items-center ${styles.holder}`}
      >
        <div className={styles.offer}>
          <div className={styles.offerdiv}>
            <div className={styles.offerElements}>
              <img
                className="tw:w-[100%] tw:h-[auto] tw:object-cover"
                src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745399904/My_project_4_2x_5bab7314-08a6-42ce-8354-5d73fbcbc36c_oxezkt.png"
              />
              <div className="tw:card tw:bg-[transparent] tw:items-center tw:text-[#000] ">
                <div className="tw:card-body tw:justify-center tw:text-center">
                  <h2 className="tw:card-title  tw:!text-[3rem]">
                    Good Friday Offer
                  </h2>
                  <p className="tw:card-title  tw:!text-[1.5rem] tw:text-theme-color">
                    SAVE UPTO 40% ON
                  </p>
                  <div className="tw:card-actions tw:justify-center">
                    <a className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.offerElements}>
                <div className="tw:card tw:bg-[transparent] tw:items-center tw:text-[#000]">
                  <div className="card-body tw:gap-[1rem] tw:items-center tw:justify-center tw:text-center">
                    <h2 className="tw:card-title  tw:!text-[3rem] tw:text-center">
                      Special Deals{" "}
                    </h2>
                    <p className="tw:card-title  tw:!text-[1.5rem] tw:text-theme-color">
                      GET 10% OFFERS ON
                    </p>
                    <div className="tw:card-actions tw:justify-center">
                      <a className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  className="tw:w-[100%] tw:h-[auto] tw:object-cover"
                  src="https://res.cloudinary.com/dpfspbjyk/image/upload/v1745399904/My_project_4_2x_5bab7314-08a6-42ce-8354-5d73fbcbc36c_oxezkt.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailHolder}>
        <div className={styles.detailHolderDiv}>
          {detailData.map((item, index) => (
            <div key={index} className={`tw:text-succes ${styles.detailCard}`}>
              <img src={item.img} alt={item.title} />
              <div className={styles.detailCardBody}>
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dealHolderMain}>
        <div className={styles.dealHolder}>
          <motion.div
            initial={{ y: "50px", opacity: "10%" }}
            whileInView={{ y: "0px", opacity: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="tw:px-[2rem]"
          >
            <div
              className={`tw:card tw:bg-base-100 tw:image-full tw:w-[100%] tw:shadow-sm ${styles.dealCard}`}
            >
              <div className="tw:card-body tw:items-center tw:justify-center tw:text-center tw:gap-[2rem]">
                <h3 className="tw:card-title tw:text-[2rem]">Card Title</h3>
                <p className="tw:text-[1.5rem] tw:text-[#fff]">
                  Sagittis eu volutpat odio facilisis mauris sit adipiscing enim
                  eu turpis egestas pretium aenean.
                </p>
                <div className="tw:card-actions tw:justify-end ">
                  <a className="tw:!px-[2rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-theme-color tw:hover:bg-theme-2 tw:text-[#fff] tw:cursor-pointer">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <div className={styles.sliderholder}>
            <Slider {...settings}>
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="tw:card tw:bg-base-100  tw:w-[50%] tw:shadow-sm tw:py-[0rem] tw:px-[.5rem] tw:text-[#000] tw:gap-[1rem]"
                    style={{ marginRight: "10px" }}
                  >
                    <figure className="tw:px-10 tw:pt-10 ">
                      <img
                        src={product.img}
                        alt="Shoes"
                        className="tw:rounded-xl tw:w-[100%] tw:h-[18rem] tw:object-cover "
                      />
                    </figure>
                    <div className="tw:card-body tw:items-center tw:text-center tw:!px-[2rem] tw:!py-[2rem] ">
                      <h3 className="tw:card-title tw:text-[1.8rem]">
                        {product.title}
                      </h3>
                      <p className="tw:text-[1.2rem]">
                        {product.price} &#8377;
                      </p>
                      <div className="tw:card-actions">
                        <NavLink className="tw:btn  tw:!px-[1rem] tw:text-[1.2rem] tw:!py-[.75rem] tw:transition tw:duration-500  tw:ease-in tw:bg-[000] tw:hover:bg-theme-2 tw:text-[#000] tw:cursor-pointer tw:capitalize ">
                          add to cart
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.swiperHolder}>
        <Swiper
          modules={[Pagination,Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-dot"></span>`;
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          className="tw:!w-[100%] tw:px-[2rem] tw:!min-h-[100%]"
          loop={true}
          
        >
          {
            swiperData.map((slide)=>(
              <SwiperSlide key={slide.id} >
                <div className="tw:flex tw:flex-col tw:gap-[2.5rem] tw:!w-[100%] tw:justify-center tw:items-center tw:py-[2rem] tw:text-center">
                  <div className="tw!:w-[5rem] tw!:h-[5rem] " ><img src={slide.img} className="tw:!w-[5rem] tw:!h-[5rem] tw:rounded-[4rem] tw:object-cover tw:!relative" /></div>
                  <p className="tw:text-[#000] tw:relative tw:z-[100] tw:w-[90%] tw:text-[1.2rem] ">{slide.para}</p>
                  <h3 className="tw:text-[1.5rem] tw:capitalize tw:text-theme-color">{slide.title}</h3>
                </div>
              </SwiperSlide>
            ))
          }
          
          

          <div className="custom-pagination" />
        </Swiper>
      </div>
    </div>
  );
};

export default CardSub;
