import React, { useEffect, useState } from "react";
import "./Search.css";
import Card from "../../components/card/Card";
import ShopModal from "../../components/shopModal/ShopModal";

function Search({
  searchFilterData,
  cardLoad2,
  setLikeData,
  setProduct,
  setSearchFilterData,
  setShopModalId,
  shopModalId
}) {
  const [modalProduct, setModalProduct] = useState(false);

  return (
    <>
      <div className="search-page">
        <div className="container">
          <div className="cards">
            {cardLoad2 ? (
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
            ) : searchFilterData?.length === 0 ? (
              <div className="topilmadi">
                <div className="search-gif">
                  <img src="/imgs/search.gif" alt="" />
                </div>
                <h2>Afsus maxsulotlar topilmadi</h2>
                <p>
                  Tovar nomini to'g'riligini tekshiring yoki boshqa so'z bilan
                  qidirib ko'ring
                </p>
              </div>
            ) : (
              searchFilterData?.map((item) => {
                return (
                  <Card
                    item={item}
                    key={item?.id}
                    setModalProduct={setModalProduct}
                    setProduct={setProduct}
                    setLikeData={setLikeData}
                    setSearchFilterData={setSearchFilterData}
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

export default Search;
