import React from "react";
import "./Card.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { baseUrl } from "../../config";

function Card({item}) {
    
  return (
    <>
      <div key={item.id} className="card">
        <div className="card-img">
          <div className="addition price-prsent">-{item?.discount_percent}%</div>
          <div className="addition heart">
            <FaRegHeart />
          </div>
          <div className="addition watch">
            <LuEye />
          </div>
          <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
          <div className="btn">Add To Cart</div>
        </div>
        <div className="card-infos">
          <h4>{item?.title.slice(0, 26)}</h4>
          <p className="price">
            ${Math.floor((item.price * item.discount_price) / 100)} <span>${item?.price}</span>
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
      </div>
    </>
  );
}

export default Card;
