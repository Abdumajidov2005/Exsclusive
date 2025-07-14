import React, { useState } from "react";
import "./SignUp.css";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { baseUrl } from "../../services/config";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [first_name, setFirstName] = useState(null);
  const [email_or_phone, setEmailOrPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const toggledPasword = () => {
    setShowPassword((prev) => !prev);
  };

  const signUp = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: first_name,
      email_or_phone: email_or_phone,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/user/register/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.message) {
          toast.success(result?.message);
          navigate("/login");
        } else if (result?.email_or_phone[0]) {
          toast.error(result?.email_or_phone[0]);
        } else if (result?.password[0]) {
          toast.error(result?.password[0]);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="sign-up">
        <div className="container">
          <div className="sign-img">
            <img src="/imgs/sign.png" alt="banner" />
          </div>
          <div className="sign-infos">
            <div className="thenSigns">
              <h1>Create an account</h1>
              <h4>Enter your details below</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  signUp();
                }}
                className="signUp"
                action="#"
              >
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => {
                    setEmailOrPhone(e.target.value);
                  }}
                  type="text"
                  placeholder="Email or Phone Number"
                />
                <div className="passwordDetail">
                  <input
                    className="passwordInputs"
                    type={showPassword ? "password" : "text"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
                <button className="accaunt">Create Account</button>
                <button className="withGoogle">
                  <BsGoogle />
                  Sign up with Google
                </button>
              </form>
              <p>
                Already have account? <Link to={"/login"}>Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
