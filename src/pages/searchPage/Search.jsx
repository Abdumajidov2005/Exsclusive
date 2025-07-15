import React, { useEffect, useState } from "react";
import "./Search.css";
import Card from "../../components/card/Card";

function Search({ searchFilterData , cardLoad}) {
  const [modalProduct, setModalProduct] = useState(false);

  return (
    <>
      <div className="search-page">
        <div className="container">
          <div className="cards">
            {cardLoad ? (
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
              searchFilterData?.map((item) => {
                return (
                  <Card
                    item={item}
                    key={item?.id}
                    setModalProduct={setModalProduct}
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
            <p
              onClick={() => {
                setModalProduct(false);
              }}
            >
              exit
            </p>
            <p>Modal oyna ichida ShopModal yoki boshqa komponent</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
