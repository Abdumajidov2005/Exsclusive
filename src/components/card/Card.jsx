import React, { useState } from "react";
import "./Card.css";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { baseUrl } from "../../services/config";
import { Link } from "react-router-dom";
import { deleteLike, oneLikeData, productDetails } from "../../services/api";

function Card({ item, setModalProduct, setProduct, setLikeData }) {
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
                    deleteLike(item?.id, setProduct, setLikeData);
                  }}
                  style={{ color: "red" }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    oneLikeData(item?.id, setProduct, setLikeData);
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
              setModalProduct(true);
              productDetails(item?.id)
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
