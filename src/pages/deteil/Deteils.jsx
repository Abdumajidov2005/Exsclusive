import React from "react";
import "./Deteils.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";

function Deteils() {
  return (
    <>
      <div className="product-details">
        <div className="container">
          <div className="section-detailas">
            <p>Account</p>/<p>Gaming</p>/<p>Havic HV G-92 Gamepad</p>
          </div>
          <div className="responces">
            <div className="responces-imageses">
              <div className="responces-imageses-types">
                <div className="types-selections">
                  <img src="/imgs/det1.png" alt="" />
                </div>
                <div className="types-selections">
                  <img src="/imgs/det2.png" alt="" />
                </div>
                 <div className="types-selections">
                  <img src="/imgs/det3.png" alt="" />
                </div>
                 <div className="types-selections">
                  <img src="/imgs/det4.png" alt="" />
                </div>
              </div>
              <div className="responces-imageses-mains">
                <img src="/imgs/det1.png" alt="" />
              </div>
            </div>
            <div className="recponces-remember">
              <h1>Havic HV G-92 Gamepad</h1>
              <div className="stockes">
                <p>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </p>
                <p>(150 Reviews)</p>
                <p>In Stock</p>
              </div>
              <h4 className="recponce-prises">$192.00</h4>
              <p className="decription">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="colors">
                <p>Colours:</p>
                <p>
                  <span></span>
                  <span></span>
                </p>
              </div>
              <div className="sizes">
                <h3>Size:</h3>
                <div className="kattalik">
                  <p>XL</p>
                  <p>M</p>
                  <p>XS</p>
                  <p>L</p>
                  <p>S</p>
                </div>
              </div>
              <div className="recponce-buying">
                <div className="counter">
                  <span>-</span>
                  <p>0</p>
                  <span>+</span>
                </div>
                <button>Buy Now</button>
                <div className="heart">
                  <FiHeart />
                </div>
              </div>
              <div className="recponce-deliverys">
                <div className="recponce-delivery">
                  <div className="icons">
                    <FaTruckFast />
                  </div>
                  <div className="recponce-delivery-free">
                    <h4>Free Delivery</h4>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="recponce-delivery">
                  <div className="icons">
                    <LuRefreshCcw />
                  </div>
                  <div className="recponce-delivery-free">
                    <h4>Return Delivery</h4>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteils;
