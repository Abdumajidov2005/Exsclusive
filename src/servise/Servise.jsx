import React, { useState } from "react";
import "./Servise.css";
import { BsGoogle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Servise() {
  const [isReset, setIsReset] = useState(false);

  return (
    <>
      <div className="sign-up">
        <div className="container">
          <div className="sign-img">
            <img src="/imgs/sign.png" alt="banner" />
          </div>
          <div className="sign-infos">
            <div className={`thenSigns ${isReset ? "thenSigns multi" : ""}`}>
              <h1>Create an account</h1>
              <h4>Enter your details below</h4>
              <form className="signUp" action="#">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <button className="accaunt">Create Account</button>
                <button className="withGoogle">
                  <BsGoogle />
                  Sign up with Google
                </button>
              </form>
              <p>
                Already have account?{" "}
                <NavLink
                  onClick={() => {
                    setIsReset(true)
                  }}
                  to={"/login"}
                >
                  Log in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servise;
