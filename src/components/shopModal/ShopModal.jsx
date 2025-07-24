import React, { useEffect, useState } from "react";
import "./ShopModal.css";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { addToCart, productDetails } from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../services/config";
import { toast } from "react-toastify";
import { getToken } from "../../services/token";

function ShopModal({
  setModalProduct,
  shopModalId,
  setProduct,
  setCartData,
  setSearchFilterData,
}) {
  const { id } = useParams();
  const [oneProductData, setProductData] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [colorAdd, setColorAdd] = useState(null);
  const [sizeAdd, setSizeAdd] = useState(null);
  const [counterShopModal, setCounterShopModal] = useState(1);
  const [shopModalLoader, setShopModalLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!shopModalId) return;
    setShopModalLoader(true);
    productDetails(shopModalId)
      .then((data) => {
        setProductData(data);
        if (data?.pictures?.length > 0) {
          setMainImg(data.pictures[0].file);
        }
      })
      .catch((err) => {
        console.error("API xato:", err);
      })
      .finally(() => {
        setShopModalLoader(false);
      });
  }, [shopModalId]);

  return (
    <>
      <div className="shopModal">
        <p
          className="chiqish"
          onClick={() => {
            setModalProduct(false);
            setColorAdd(null);
            setSizeAdd(null);
            setCounterShopModal(1);
          }}
        >
          <FaXmark />
        </p>
        <div className="shop-modal-rasmlar">
          {shopModalLoader ? (
            <div className="shop-loaders">
              <span></span>
            </div>
          ) : (
            <Link
              onClick={() => {
                setModalProduct(false);
              }}
              to={`/deteils/${oneProductData?.id}`}
              className="shop-modal-rasmi"
            >
              {mainImg && <img src={`${baseUrl}${mainImg}`} alt="" />}
            </Link>
          )}

          <Link
            onClick={() => {
              setModalProduct(false);
            }}
            className="btn-more"
            to={`/deteils/${oneProductData?.id}`}
          >
            Show More <FaArrowRightLong />
          </Link>
        </div>
        <div className="shop-modal-info">
          <h2>
            {shopModalLoader ? (
              <p className="loadings"></p>
            ) : oneProductData?.title.length <= 26 ? (
              oneProductData?.title
            ) : (
              oneProductData?.title.slice(0, 26) + "..."
            )}
          </h2>

          {shopModalLoader ? (
            <p className="loadings load-color"></p>
          ) : (
            <div className="colors">
              <h2>Color:</h2>
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
          )}

          {shopModalLoader ? (
            <p className="loadings"></p>
          ) : oneProductData?.properties?.size ? (
            <div className="sizes">
              <h2>Size:</h2>
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

          {shopModalLoader ? (
            <p className="loadings load-color"></p>
          ) : (
            <div className="soni">
              <h2>Quanlity:</h2>
              <div className="quanlitys">
                <span
                  onClick={() => {
                    if (counterShopModal > 1) {
                      setCounterShopModal(counterShopModal - 1);
                    } else {
                      toast.warning("Eng kamida 1 ta maxsulot tanlang");
                    }
                  }}
                >
                  -
                </span>
                <p>{counterShopModal}</p>
                <span
                  onClick={() => {
                    setCounterShopModal(counterShopModal + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
          )}

          {shopModalLoader ? (
            <p className="loadings load-prices"></p>
          ) : (
            <div className="price">
              <h2>price:</h2>
              <p>
                {oneProductData?.price
                  ? oneProductData?.price * counterShopModal
                  : 0}
              </p>
            </div>
          )}

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
                setModalProduct(false);
                setColorAdd(null);
                setSizeAdd(null);
                setCounterShopModal(1);
                addToCart(
                  oneProductData?.id,
                  counterShopModal,
                  colorAdd,
                  sizeAdd,
                  setCartData,
                  setProduct,
                  setSearchFilterData,
                );
              } else {
                navigate("/signup");
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ShopModal;
