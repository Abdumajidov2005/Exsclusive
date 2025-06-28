import React from "react";
import "./Card.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

function Card({item}) {
    
  return (
    <>
      <div className="card">
        <div className="card-img">
          <div className="addition price-prsent">-{item?.discount}%</div>
          <div className="addition heart">
            <FaRegHeart />
          </div>
          <div className="addition watch">
            <LuEye />
          </div>
          <img src="/imgs/c1.png" alt="" />
          <div className="btn">Add To Cart</div>
        </div>
        <div className="card-infos">
          <h4>{item?.name}</h4>
          <p className="price">
            ${(item.price * item.discount) / 100} <span>${item?.price}</span>
          </p>
          <div className="stars">
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <span>({item?.countes})</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
