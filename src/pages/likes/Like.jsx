import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Like.css";
import ShopModal from "../../components/shopModal/ShopModal";
import LikeCard from "../../likeCard/LikeCard";
import { GoHeartFill } from "react-icons/go";

function Like({
  product,
  cardLoad3,
  likeData,
  setLikeData,
  setProduct,
  cardLoad4,
  shopModalId,
  modalProduct,
  setModalProduct,
  setShopModalId
}) {
  const [moreiInfo4, setMoreInfo4] = useState(false);

  return (
    <>
      <div className="likes">
        <div className="container">
          <div className="add-to-wishlist">
            <div className="cards">
              {cardLoad4 ? (
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
              ) : likeData?.length === 0 ? (
                <div className="tugadi">
                  <div className="like-gif">
                    <img src="/imgs/like.gif" alt="" />
                  </div>
                  <div className="like-infogif">
                    <p> Sevimli mahsulotlar yo'q</p>
                    <p>
                      {" "}
                      Mahsulotdagi{" "}
                      <span>
                        <GoHeartFill />
                      </span>{" "}
                      belgisi bilan qo'shing️
                    </p>
                  </div>
                </div>
              ) : (
                likeData?.map((item) => {
                  return (
                    <LikeCard
                      key={item?.id}
                      item={item}
                      setLikeData={setLikeData}
                      setProduct={setProduct}
                      setModalProduct={setModalProduct}
                      setShopModalId={setShopModalId}
                    />
                  );
                })
              )}
            </div>
          </div>
          <div className="views">
            <div className="today">
              <h2 className="category">Just For You</h2>
            </div>
            <div className="show-more show-mores">
              {moreiInfo4 ? (
                <button
                  onClick={() => {
                    setMoreInfo4(false);
                  }}
                >
                  Hide All
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMoreInfo4(true);
                  }}
                >
                  View All
                </button>
              )}
            </div>
          </div>
          <div className="cards">
            {moreiInfo4 ? (
              product?.slice(0).map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    setLikeData={setLikeData}
                    setProduct={setProduct}
                    setModalProduct={setModalProduct}
                    setShopModalId={setShopModalId}
                  />
                );
              })
            ) : cardLoad3 ? (
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
                return (
                  <Card
                    key={item.id}
                    item={item}
                    setLikeData={setLikeData}
                    setProduct={setProduct}
                    setModalProduct={setModalProduct}
                    setShopModalId={setShopModalId}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className={`modal-oyna ${modalProduct ? "tojoin" : ""}`}>
        <div onClick={() => setModalProduct(false)} className="modal-close-bg">
          <div onClick={(e) => e.stopPropagation()}>
            {shopModalId && (
              <ShopModal
                shopModalId={shopModalId}
                setModalProduct={setModalProduct}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Like;
