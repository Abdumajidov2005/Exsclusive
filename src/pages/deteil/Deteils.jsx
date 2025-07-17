import React, { useState, useEffect } from "react";
import "./Deteils.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { productDetails } from "../../services/api";
import { baseUrl } from "../../services/config";
import { toast } from "react-toastify";

function Deteils() {
  const { id } = useParams();
  const [oneProductData, setProductData] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [count, setCount] = useState(1);
  const [sizeAdd, setSizeAdd] = useState(null);
  const [colorAdd, setColorAdd] = useState(null);

  useEffect(() => {
    productDetails(id)?.then((data) => {
      setProductData(data);
      setMainImg(data?.pictures[0]?.file);
    });
  }, [id]);

  return (
    <>
      <div className="product-details">
        <div className="container">
          <div className="section-detailas">
            <p>Account</p>/<p>{oneProductData?.category?.title}</p>/
            <p>{oneProductData?.title}</p>
          </div>
          <div className="responces">
            <div className="responces-imageses">
              <div className="responces-imageses-types">
                {oneProductData?.pictures?.map((item, index) => {
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
                })}
              </div>
              <div className="responces-imageses-mains">
                {mainImg && <img src={`${baseUrl}${mainImg}`} alt="" />}
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
                  : oneProductData?.description.length < 100
                  ? oneProductData?.description
                  : oneProductData?.description.slice(0, 250) + "...."}
                {oneProductData?.description.length < 100 ? (
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
                        className={`color-select ${
                          colorAdd == item ? "tanlash" : ""
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </p>
              </div>
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
              <div className="recponce-buying">
                <div className="counter">
                  <span
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      } else {
                        count == 1;
                        toast.warning("Maxsulot qo'shing");
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
                <button>Buy Now</button>
                <div className="heart">
                  <FiHeart />
                </div>
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
