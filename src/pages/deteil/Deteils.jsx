import React, { useState, useEffect } from "react";
import "./Deteils.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart, productDetails } from "../../services/api";
import { baseUrl } from "../../services/config";
import { toast } from "react-toastify";
import { getToken } from "../../services/token";

function Deteils({setCartData}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [oneProductData, setProductData] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [count, setCount] = useState(1);
  const [sizeAdd, setSizeAdd] = useState(null);
  const [colorAdd, setColorAdd] = useState(null);

  const [detailsLoder, setDetailsLoader] = useState(false);

  useEffect(() => {
    if (!id) return;
    setDetailsLoader(true);
    productDetails(id)
      .then((data) => {
        if (data) {
          setProductData(data);

          if (data?.pictures?.length > 0) {
            setMainImg(data.pictures[0].file);
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
      })
      .finally(() => {
        setDetailsLoader(false);
      });
  }, [id]);

  // if (!oneProductData) {
  //   return <p>Loading product details...</p>;
  // }

  return (
    <>
      <div className="product-details">
        <div className="container">
          <div className="section-detailas">
            <p>Account</p>/
            <Link to={`/category/${oneProductData?.category?.id}`}>
              {oneProductData?.category?.title}
            </Link>
            /<p>{oneProductData?.title}</p>
          </div>
          <div className="responces">
            <div className="responces-imageses">
              <div className="responces-imageses-types">
                {detailsLoder ? (
                  <div className="load-cards-typ">
                    <div className="type-loads"></div>
                    <div className="type-loads"></div>
                    <div className="type-loads"></div>
                    <div className="type-loads"></div>
                  </div>
                ) : (
                  oneProductData?.pictures?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setMainImg(item?.file);
                        }}
                        className="types-selections"
                      >
                        <img src={`${baseUrl}${item?.file}`} alt="" />
                      </div>
                    );
                  })
                )}
              </div>
              <div className="responces-imageses-mains">
                {detailsLoder ? (
                  <div className="loader-mains"></div>
                ) : (
                  mainImg && <img src={`${baseUrl}${mainImg}`} alt="" />
                )}
              </div>
            </div>
            <div className="recponces-remember">
              <h1>{oneProductData?.title}</h1>
              <div className="stockes">
                <p>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </p>
                <p>({oneProductData?.review_quantity} Reviews)</p>
                <p>In Stock</p>
              </div>
              <h4 className="recponce-prises">
                {oneProductData?.price ? oneProductData.price * count : 0}
              </h4>
              <p className="decription">
                {readMore
                  ? oneProductData?.description
                  : oneProductData?.description?.length < 100
                  ? oneProductData?.description
                  : oneProductData?.description?.slice(0, 250) + "...."}
                {oneProductData?.description?.length < 100 ? (
                  ""
                ) : readMore ? (
                  <span
                    onClick={() => {
                      setReadMore(false);
                    }}
                  >
                    ReadLess
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setReadMore(true);
                    }}
                  >
                    ReadMore
                  </span>
                )}
              </p>
              <div className="colors">
                <p>Colours:</p>
                <p>
                  {oneProductData?.properties?.color?.map((item, index) => {
                    return (
                      <span
                        onClick={() => {
                          setColorAdd(item);
                        }}
                        key={index}
                        style={{ background: item }}
                        className={`color-select ${
                          colorAdd === item ? "tanlash" : ""
                        }`}
                      ></span>
                    );
                  })}
                </p>
              </div>
              {oneProductData?.properties?.size ? (
                <div className="sizes">
                  <h3>Size:</h3>
                  <div className="kattalik">
                    {oneProductData?.properties?.size?.map((item, index) => {
                      return (
                        <p
                          onClick={() => {
                            setSizeAdd(item);
                          }}
                          className={`sizeeffect ${
                            sizeAdd === item ? "designation" : ""
                          }`}
                          key={index}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="recponce-buying">
                <div className="counter">
                  <span
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      } else {
                        toast.warning("Eng kamida 1 ta maxsulot tanlang");
                      }
                    }}
                  >
                    -
                  </span>
                  <p>{count}</p>
                  <span
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (getToken()) {
                      const hasSizeOption = oneProductData?.sizes?.length > 0;

                      if (!colorAdd || (hasSizeOption && !sizeAdd)) {
                        toast.warning(
                          "Iltimos, rang" +
                            (hasSizeOption ? " va o'lchamni " : "") +
                            " tanlang!"
                        );
                        return;
                      }
                       setColorAdd(null)
                       setSizeAdd(null)
                       setCount(1)
                      addToCart(oneProductData?.id, count, colorAdd, sizeAdd, setCartData);
                    } else {
                      navigate("/signup");
                    }
                  }}
                >
                  Buy Now
                </button>
              </div>
              <div className="recponce-deliverys">
                <div className="recponce-delivery">
                  <div className="icons">
                    <FaTruckFast />
                  </div>
                  <div className="recponce-delivery-free">
                    <h4>Free Delivery</h4>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="recponce-delivery">
                  <div className="icons">
                    <LuRefreshCcw />
                  </div>
                  <div className="recponce-delivery-free">
                    <h4>Return Delivery</h4>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related">
            <div className="cards"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteils;
