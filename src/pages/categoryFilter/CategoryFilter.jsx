import React, { useEffect, useState } from "react";
import "./CategoryFilter.css";
import { Link, useParams } from "react-router-dom";
import { getFilterData } from "../../services/api";
import Card from "../../components/card/Card";
import ShopModal from "../../components/shopModal/ShopModal";

function CategoryFilter({
  setProduct,
  setLikeData,
  shopModalId,
  modalProduct,
  setModalProduct,
  setShopModalId,
}) {
  const { id } = useParams();
  const [filterId, setFilterId] = useState(null);
  const [cardLoad5, setCardLoad5] = useState(false);

  useEffect(() => {
    setCardLoad5(true);
    getFilterData(id)
      ?.then(setFilterId)
      .finally(() => {
        setCardLoad5(false);
      });
  }, [id]);

  return (
    <>
      <div className="categoryFilter">
        <div className="container">
          <h2>
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <span>Category Filter</span>
          </h2>

          <div className="cards">
            {cardLoad5 ? (
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
              filterId?.map((item) => {
                return (
                  <Card
                    key={item?.id}
                    item={item}
                    setProduct={setProduct}
                    setLikeData={setLikeData}
                    setModalProduct={setModalProduct}
                    setShopModalId={setShopModalId}
                  />
                );
              })
            )}
          </div>
          <div className={`modal-oyna ${modalProduct ? "tojoin" : ""}`}>
            <div
              onClick={() => setModalProduct(false)}
              className="modal-close-bg"
            >
              <div onClick={(e) => e.stopPropagation()}>
                {console.log(shopModalId)}
                {shopModalId && (
                  <ShopModal
                    shopModalId={shopModalId}
                    setModalProduct={setModalProduct}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
