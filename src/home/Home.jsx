import React from "react";
import Hero from "../components/hero/Hero";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="main-products">
          <div className="container">
            <div className="sales-flash">
              <div className="today">
                <h2>Today's</h2>
              </div>
              <div className="three-sales">
                <div className="three-sales-titles">
                  <h2>Flash Sales</h2>
                  <div className="three-sales-oclock">
                    <h2>
                      <span>Days</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Days</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Days</span>
                      03
                    </h2>
                    <span className="double-dot">:</span>
                    <h2>
                      <span>Days</span>
                      03
                    </h2>
                  </div>
                </div>

                <div className="three-sales-lines">
                  <p>
                    <FaArrowLeft />
                  </p>
                  <p>
                    <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
