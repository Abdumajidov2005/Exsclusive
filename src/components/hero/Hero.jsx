import React from "react";
import "./Hero.css";
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-menu">
            <ul className="menu-bar">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
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
