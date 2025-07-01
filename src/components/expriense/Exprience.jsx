import React from "react";
import "./Expreince.css";


function Exprience() {
  return (
    <>
      <section className="expriense">
        <div className="container">
            <div className="changeMusic">
                <div className="texts">
                  <h3>Categories</h3>
                  <h1>Enhance Your Music Experience</h1>
                  <div className="music-times">
                    <div className="time">
                      <h2>23</h2>
                      <span>Hours</span>
                    </div>
                    <div className="time">
                      <h2>23</h2>
                      <span>Hours</span>
                    </div>
                    <div className="time">
                      <h2>23</h2>
                      <span>Hours</span>
                    </div>
                    <div className="time">
                      <h2>23</h2>
                      <span>Hours</span>
                    </div>
                  </div>
                  <button>Buy Now!</button>
                </div>
                <div className="expriense-player">
                  <img src="/imgs/section.png" alt="" />
                </div>
              </div>
        </div>
      </section>
    </>
  );
}

export default Exprience;
