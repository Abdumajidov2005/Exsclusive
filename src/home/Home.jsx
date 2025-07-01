import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import { FaArrowLeft, FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";
import "./Home.css";
import { LuEye, LuShieldCheck } from "react-icons/lu";
import Card from "../components/card/Card";
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Exprience from "../components/expriense/Exprience";

function Home() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "HAVIT HV-G92 Gamepad",
      price: "160",
      discount: "80",
      countes: "88",
    },
    {
      id: 1,
      name: "AK-900 Wired Keyboard",
      price: "1260",
      discount: "35",
      countes: "88",
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      price: "460",
      discount: "20",
      countes: "88",
    },
    {
      id: 3,
      name: "S-Series Comfort Chair ",
      price: "260",
      discount: "50",
      countes: "88",
    },
  ]);

  return (
    <>
      <Hero />
      <main>
        <section className="main-products">
          <div className="container">
            <div className="sales-flash">
              <div className="today">
                <h2>Today's</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles">
                  <h4>Flash Sales</h4>
                  <div className="three-sales-oclock">
                    <h2>
                      <span>Days</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Hours</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Minutes</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Seconds</span>
                      03
                    </h2>
                  </div>
                </div>

                <div className="three-sales-lines">
                  <p>
                    <FaArrowLeft />
                  </p>
                  <p>
                    <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="cards">
              {data?.map((item) => {
                return <Card key={item.id} item={item} />;
              })}
            </div>
            <div className="show-more">
              <button>View All Products</button>
            </div>
          </div>
        </section>
        <section className="main-products">
          <div className="container">
            <div className="sales-flash sales-flash2">
              <div className="today">
                <h2 className="category">Categories</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles">
                  <h4>Browse By Category</h4>
                </div>

                <div className="three-sales-lines">
                  <p>
                    <FaArrowLeft />
                  </p>
                  <p>
                    <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="categorys">
              <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
               <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
               <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
               <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
               <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
               <div className="browse">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3296_2972)">
                    <path
                      className="grids"
                      d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M25.6667 7H31.1354"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="grids"
                      d="M28 44.0052V44.0305"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      className="grids"
                      x1="15.1667"
                      y1="39.8334"
                      x2="40.8333"
                      y2="39.8334"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3296_2972">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Phones</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="sales-flash sales-flash2">
              <div className="today">
                <h2 className="category">This Month</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles">
                  <h4>Best Selling Products</h4>
                </div>

                <button className="wiew">View All</button>
              </div>
            </div>
            <div className="cards">
              {data?.map((item) => {
                return <Card key={item.id} item={item} />;
              })}
            </div>
          </div>
        </section>
        <Exprience/>
        <section className="products">
          <div className="container">
            <div className="sales-flash sales-flash2">
              <div className="today">
                <h2 className="our">Our Products</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles">
                  <h4>Explore Our Products</h4>
                </div>

                <div className="three-sales-lines">
                  <p>
                    <FaArrowLeft />
                  </p>
                  <p>
                    <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="cards">
              {data?.map((item) => {
                return <Card key={item.id} item={item} />;
              })}
            </div>
            <div className="show-more">
              <button>View All Products</button>
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="container">
            <div className="arrival">
              <div className="today">
                <h2 className="news">Featured</h2>
              </div>
              <h1>New Arrival</h1>
            </div>
            <div className="stations">
              <div className="station">
                <img src="/imgs/section1.png" alt="" />
                <div className="abouts">
                  <h2>PlayStation 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="collections">
                <div className="collection">
                  <img src="/imgs/section2.png" alt="" />
                  <div className="about">
                    <h2>Women’s Collections</h2>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <button>Shop Now</button>
                  </div>
                </div>
                <div className="collection">
                  <div className="speacers">
                    <img src="/imgs/section3.png" alt="" />
                    <div className="about about1">
                      <h2>Speakers</h2>
                      <p>Amazon wireless speakers</p>
                      <button>Shop Now</button>
                    </div>
                  </div>
                  <div className="speacers">
                    <img src="/imgs/section4.png" alt="" />
                    <div className="about about1">
                      <h2>Perfume</h2>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <button>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="deliverys">
          <div className="container">
            <div className="delivery">
              <p>
                <FaTruckFast />
              </p>
              <h2>FREE AND FAST DELIVERY</h2>
              <h5>Free delivery for all orders over $140</h5>
            </div>
            <div className="delivery">
              <p>
                <TfiHeadphoneAlt />
              </p>
              <h2>24/7 CUSTOMER SERVICE</h2>
              <h5>Friendly 24/7 customer support</h5>
            </div>
            <div className="delivery">
              <p>
                <LuShieldCheck />
              </p>
              <h2>MONEY BACK GUARANTEE</h2>
              <h5>We reurn money within 30 days</h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
