import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaCaretDown, FaSortUp } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

function Cart() {
  return (
    <>
      <div className="one-cart">
        <div className="container">
          <p className="go-home">
            {" "}
            <Link to={"/"}>Home</Link> <span>/</span> <span>Cart</span>
          </p>
          <div className="one-cart-shopping">
            <div className="quanlity main">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="quanlity">
              <h3>
               <div className="cart-img">
                 <span><HiOutlineXMark /></span>
                <img src="/imgs/c1.png" alt="" />
               </div>
                LCD Monitor
              </h3>
              <h3>$650</h3>
              <h3>
                <div className="startup">
                  <p>3</p>
                  <p>
                    <span>
                      <FaSortUp />
                    </span>
                    <span>
                      <FaCaretDown />
                    </span>
                  </p>
                </div>
              </h3>
              <h3>$650</h3>
            </div>
            <div className="quanlity">
              <h3>
               <div className="cart-img">
                 <span><HiOutlineXMark /></span>
                <img src="/imgs/c1.png" alt="" />
               </div>
                LCD Monitor
              </h3>
              <h3>$650</h3>
              <h3>
                <div className="startup">
                  <p>3</p>
                  <p>
                    <span>
                      <FaSortUp />
                    </span>
                    <span>
                      <FaCaretDown />
                    </span>
                  </p>
                </div>
              </h3>
              <h3>$650</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
