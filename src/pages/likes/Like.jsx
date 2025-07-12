import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { getProductData } from "../../services/api";
import "./Like.css"

function Like() {
  const [product, setProduct] = useState([]);
    const [moreiInfo4, setMoreInfo4] = useState(false);
      const [cardLoad, setCardLoad] = useState(false);
    
  
useEffect(()=>{
    getProductData().then(setProduct)
    .finally(() => setCardLoad(false));
}, [])
  return (
    <>
      <div className="likes">
        <div className="container">
          <div className="views">
             <div className="today">
                <h2 className="category">Just For You</h2>
              </div>
             <div className="show-mores">
              {moreiInfo4 ? (
                <button
                  onClick={() => {
                    setMoreInfo4(false);
                  }}
                >
                  Hide All
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMoreInfo4(true);
                  }}
                >
                  View All 
                </button>
              )}
            </div>
          </div>
          <div className="cards">
             {moreiInfo4 ? (
                product?.slice(0).map((item) => {
                  return <Card key={item.id} item={item}/>;
                })
              ) : cardLoad ? (
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
                product?.slice(0, 4).map((item) => {
                  return <Card key={item.id} item={item}  />;
                })
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Like;
