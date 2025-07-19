import React, { useState } from "react";
import "./Card.css";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { baseUrl } from "../../services/config";
import { Link, useNavigate } from "react-router-dom";
import { deleteLike, oneLikeData } from "../../services/api";
import { getToken } from "../../services/token";

function Card({
  item,
  setModalProduct,
  setProduct,
  setLikeData,
  setShopModalId,
  setSearchFilterData
}) {
  const navigate = useNavigate();

  return (
    <>
      <Link to={`/deteils/${item?.id}`} key={item?.id} className="card">
        <div className="card-img">
          {item?.discount_price > 0 && item?.discount_percent > 0 && (
            <div className="addition price-prsent">
              -{item.discount_percent}%
            </div>
          )}

          <div>
            <p
              className="addition heart"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {item?.is_liked ? (
                <FaHeart
                  onClick={() => {
                    deleteLike(item?.id, setProduct, setLikeData, setSearchFilterData);
                  }}
                  style={{ color: "red" }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    getToken()
                      ? oneLikeData(item?.id, setProduct, setLikeData, setSearchFilterData)
                      : navigate("/signup");
                  }}
                />
              )}
            </p>
            <p className="addition watch">
              <LuEye />
            </p>
          </div>

          <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
          <div
            onClick={(e) => {
              e.preventDefault();
              getToken() ?  setModalProduct(true) : navigate("/signup")
              setShopModalId(item?.id);
              console.log(item.id);
              
            }}
            className="btn"
          >
            Add To Cart
          </div>
        </div>
        <div className="card-infos">
          <h4>
            {item?.title.length <= 26
              ? item?.title
              : item?.title.slice(0, 26) + "..."}
          </h4>
          <p className="price">
            ${item?.discount_price} <span>${item?.price}</span>
          </p>
          <div className="stars">
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <span>({item?.review_quantity})</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
