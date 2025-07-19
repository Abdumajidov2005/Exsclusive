import React from "react";
import "./LikeCard.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../services/config";
import { BsTrash } from "react-icons/bs";
import { deleteLike } from "../services/api";

function LikeCard({ item, setModalProduct, setLikeData, setProduct, setShopModalId }) {
  return (
    <>
      <Link to={`/deteils/${item?.id}`} className="likecard">
        <div className="like-img">
          {item?.discount_price > 0 && item?.discount_percent > 0 && (
            <div className="like-persent">-{item.discount_percent}%</div>
          )}
          <p
            onClick={(e) => {
              e.preventDefault();
              deleteLike(item?.id, setProduct, setLikeData);
            }}
            className="like-trash"
          >
            <BsTrash />
          </p>

          <div
            onClick={(e) => {
              e.preventDefault();
              setModalProduct(true);
              setShopModalId(item?.id);
            }}
            className="like-btn"
          >
            Add To Cart
          </div>

          <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
        </div>
        <div className="like-info">
          <h4>
            {item?.title.length <= 26
              ? item?.title
              : item?.title.slice(0, 26) + "..."}
          </h4>
          <p>
            <span>${item?.discount_price}</span>
            <span style={{textDecoration:"line-through"}}>${item?.price}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default LikeCard;
