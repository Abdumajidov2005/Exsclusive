import React from "react";
import "./ShopModal.css";
import { FaXmark } from "react-icons/fa6";

function ShopModal({ setModalProduct }) {
  return (
    <>
      <div className="shopModal">
        <p
          onClick={() => {
            setModalProduct(false);
          }}
        >
          <FaXmark />
        </p>
         <div className="shop-modal-img">
            <div className="shop-modal-imgs">
                 <img src="/imgs/det1.png" alt="" />
            </div>
            <button>
               Show More
            </button>
         </div>
      </div>
    </>
  );
}

export default ShopModal;
