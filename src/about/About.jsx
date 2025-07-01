import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";

function About() {
  return (
    <>
      <div className="about-pages">
        <div className="about-to-home">
          <div className="container">
             <Link to={"/"}>Home</Link> <span>/</span> <p>About</p>
          </div>
        </div>
        <div className="storys">
          <div className="container">
              <div className="storys-information">
                 <h1>Our Story</h1>
                 <p>
                  Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                 </p>
                 <p>
                  Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                 </p>
              </div>
              <div className="storys-girls">
                 <img src="/imgs/about.png" alt="girls" />
              </div>
          </div>
        </div>
        <div className="product-command">
          <div className="container">
             <div className="gros-sites">
                <div className="site">
                   <p>
                    <CiShop />
                   </p>
                   <h2>
                    10.5k 
                   </h2>
                   <h5>
                    Sallers active our site
                   </h5>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
