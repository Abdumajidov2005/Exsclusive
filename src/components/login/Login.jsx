import React from "react";
import "./Login.css";
import { BsGoogle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login-img">
            <img src="/imgs/sign.png" alt="banner" />
          </div>
          <div className="login-infos">
            <div className="thenlogins ">
              <h1>Log in to Exclusive</h1>
              <h4>Enter your details below</h4>
              <form className="loginUp" action="#">
                <input type="text" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <div className="btns">
                  <button><NavLink to={"/"}>Log In</NavLink></button>
                  <p>Forget Password?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
