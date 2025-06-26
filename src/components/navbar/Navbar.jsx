import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-top">
          <div className="container">
            <div></div>
            <div className="summer">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%! <span>ShopNow</span>
              </p>
            </div>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Russian</option>
            </select>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="container">
            <div className="logo">
              <Link to="/">Exclusive</Link>
            </div>
            <ul className="links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="servise">Sign Up</NavLink>
              </li>
            </ul>
            <div className="icons">
              <div className="search">
                <input type="text" placeholder="What are you looking for?" />
                <h5>
                  <LuSearch />
                </h5>
              </div>
              <p>
                <FaRegHeart />
              </p>
              <p>
                <RiShoppingCart2Line />
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="bosh"></div>
    </>
  );
}

export default Navbar;
