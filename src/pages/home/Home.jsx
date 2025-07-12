import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { LuShieldCheck } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { getCategory, getProductData } from "../../services/api";
import Exprience from "../../components/expriense/Exprience";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";

function Home() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [cardLoad, setCardLoad] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryLoadingCard, setCategoryLoadingCard] = useState(false);

  useEffect(() => {
    setCategoryLoading(true);
    setCategoryLoadingCard(true);
    setCardLoad(true);

    getCategory()
      .then(setCategory)
      .finally(() => {
        setCategoryLoading(false);
        setCategoryLoadingCard(false);
      });

    getProductData()
      .then(setProduct)
      .finally(() => setCardLoad(false));
  }, []);

  const [moreiInfo, setMoreInfo] = useState(false);
  const [moreiInfo2, setMoreInfo2] = useState(false);
  const [moreiInfo3, setMoreInfo3] = useState(false);

  return (
    <>
      <Hero category={category} categoryLoading={categoryLoading} />
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
              {moreiInfo ? (
                product?.slice(0).map((item) => {
                  return <Card key={item.id} item={item}/>;
                })
              ) : cardLoad ? (
                <div className="card-loaderss-mark">
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                product?.slice(0, 4).map((item) => {
                  return <Card key={item.id} item={item}  />;
                })
              )}
            </div>
            <div className="show-more">
              {moreiInfo ? (
                <button
                  onClick={() => {
                    setMoreInfo(false);
                  }}
                >
                  Hide All Products
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMoreInfo(true);
                  }}
                >
                  View All Products
                </button>
              )}
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
                <div className="three-sales-titles browse-by">
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
              {categoryLoadingCard ? (
                <div className="category-card-loadings">
                   <div className="category-card-loadings-subs">
                      <span></span>
                      <span></span>
                   </div>
                   <div className="category-card-loadings-subs">
                      <span></span>
                      <span></span>
                   </div>
                   <div className="category-card-loadings-subs">
                      <span></span>
                      <span></span>
                   </div>
                   <div className="category-card-loadings-subs">
                      <span></span>
                      <span></span>
                   </div>
                   <div className="category-card-loadings-subs">
                      <span></span>
                      <span></span>
                   </div>
                </div>
              ) : (
                category?.map((item) => {
                  return (
                    <div key={item.id} className="browse">
                      <img src={item?.image} alt="" />
                      <p>{item?.title}</p>
                    </div>
                  );
                })
              )}
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
                <div className="three-sales-titles browse-by">
                  <h4>Best Selling Products</h4>
                </div>

                {moreiInfo2 ? (
                  <button
                    onClick={() => {
                      setMoreInfo2(false);
                    }}
                    className="wiew"
                  >
                    Hide All
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setMoreInfo2(true);
                    }}
                    className="wiew"
                  >
                    View All
                  </button>
                )}
              </div>
            </div>
            <div className="cards">
              {moreiInfo2 ? (
                product?.slice(0).map((item) => {
                  return <Card key={item.id} item={item} />;
                })
              ) : cardLoad ? (
                <div className="card-loaderss-mark">
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                product?.slice(0, 4).map((item) => {
                  return <Card key={item.id} item={item}/>;
                })
              )}
            </div>
          </div>
        </section>
        <Exprience />
        <section className="products">
          <div className="container">
            <div className="sales-flash sales-flash2">
              <div className="today">
                <h2 className="our">Our Products</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles browse-by">
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
              {moreiInfo3 ? (
                product?.slice(0).map((item) => {
                  return <Card key={item.id} item={item}/>;
                })
              ) : cardLoad ? (
                <div className="card-loaderss-mark">
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-loaderss-patch">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                product?.slice(0, 8).map((item) => {
                  return <Card key={item.id} item={item}/>;
                })
              )}
            </div>
            <div className="show-more">
              {moreiInfo3 ? (
                <button
                  onClick={() => {
                    setMoreInfo3(false);
                  }}
                >
                  Hide All Products
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMoreInfo3(true);
                  }}
                >
                  View All Products
                </button>
              )}
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
