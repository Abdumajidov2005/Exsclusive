import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { baseUrl } from "../../services/config";
import { getToken, setToken } from "../../services/token";
import { toast } from "react-toastify";

function Login({setUserToken}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email_or_phone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const toggledPasword = () => {
    setShowPassword((prev) => !prev);
  };

  const login = () => {
    setIsLoading(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone: email_or_phone,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/user/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result?.non_field_errors) && result?.non_field_errors.length > 0) {
          toast.error(result?.non_field_errors[0]);
        } else if(result?.access) {
          setToken(result?.access);
          setUserToken(getToken())
          toast.success("ro'yxatdan o'tildi");
          navigate("/")
        }else{
          toast.error("Xatolik yuz berdi qayta urinib ko'ring")
        }
      })
      .catch((error) => console.error(error))
      .finally(()=>{
        setIsLoading(false)
      })
  };

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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                }}
                className="loginUp"
                action="#"
              >
                <input
                  onInput={(e) => {
                    setEmailOrPhone(e.target.value);
                  }}
                  type="text"
                  placeholder="Email or Phone Number"
                />
                <div className="LoginPasswordDetail">
                  <input
                    className="LoginPasswordInputs"
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "password" : "text"}
                    placeholder="Password"
                  />
                  <span
                    onClick={() => {
                      // if (showPassword) {
                      //   setShowPassword(false);
                      // } else {
                      //   setShowPassword(true);
                      // }
                      toggledPasword();
                    }}
                  >
                    {showPassword ? <LuEyeClosed /> : <LuEye />}
                  </span>
                </div>
                <div className="btns">
                  <button>
                    {
                      isLoading ? "Yuklanmoqda...": "Login"
                    }
                    </button>
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
