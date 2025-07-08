import "./Hero.css";
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hero({ category, categoryLoading }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-menu">
            <ul className="menu-bar">
              {categoryLoading ? (
                <div className="category-loads">
                  <div className="category-loads-puts">
                    <div className="circle-loaders"></div>
                    <div className="lines-loaders"></div>
                  </div>
                   <div className="category-loads-puts">
                    <div className="circle-loaders"></div>
                    <div className="lines-loaders"></div>
                  </div>
                   <div className="category-loads-puts">
                    <div className="circle-loaders"></div>
                    <div className="lines-loaders"></div>
                  </div>
                   <div className="category-loads-puts">
                    <div className="circle-loaders"></div>
                    <div className="lines-loaders"></div>
                  </div>
                   <div className="category-loads-puts">
                    <div className="circle-loaders"></div>
                    <div className="lines-loaders"></div>
                  </div>
                </div>
              ) : (
                category?.map((item) => {
                  return (
                    <li key={item.id}>
                      {" "}
                      <img src={item?.image} alt="" /> {item?.title}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="output">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider">
                  <div className="hero-slider-info">
                    <h4>
                      <span>
                        <BsApple />
                      </span>
                      iPhone 14 Series
                    </h4>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-slider-rasm">
                    <img src="/imgs/heroimg.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
