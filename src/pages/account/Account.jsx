import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../services/api";
import { baseUrl } from "../../services/config";
import { getToken } from "../../services/token";
import { toast } from "react-toastify";

function Account() {
  const [userData, setUserData] = useState(null);
  const [first_name, setFirstName] = useState("");
  const [email_or_phone, setEmailOrPhone] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUserData()?.then((data) => {
      setUserData(data);
      setFirstName(data?.first_name || "");
      setLastName(data?.last_name || "");
      setPhone(data?.phone || "");
      setAddress(data?.address || "");
      setEmailOrPhone(data?.email || data?.email_or_phone || "");
    });
  }, []);

  const updateData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email_or_phone,
      phone: phone,
      address: address,
      password: password,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/user/update-profile/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (Array.isArray(result.email)) {
          toast.error(`Email: ${result.email[0]}`);
        } else if (Array.isArray(result.password)) {
          toast.error(`Password:${result.password[0]}`);
        } else if (Array.isArray(result.phone)) {
          toast.error(`Phone: ${result.phone[0]}`);
        } else if (Array.isArray(result.address)) {
          toast.error(`Address: ${result.address[0]}`);
        } else if (Array.isArray(result.first_name)) {
          toast.error(`FirstName: ${result.first_name[0]}`);
        } else {
          toast.success("Ma'lumotlar yangilandi");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="account">
        <div className="container">
          <div className="start-account">
            <p>
              <span>
                <Link to={"/"}>Home</Link>
              </span>{" "}
              / <span>My Account</span>
            </p>
            <h6>
              Welcome! <span>Md Rimel</span>
            </h6>
          </div>
          <div className="account-profiles">
            <div className="manage">
              <ul>
                <li>Manage My Account</li>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
              <ul>
                <li>My Orders</li>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
              <ul>
                <li>My WishList</li>
              </ul>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateData();
              }}
              className="edit"
            >
              <h1>Edit Your Profile</h1>
              <div className="edit-account-title">
                <div className="user-bios">
                  <div className="user-bio">
                    <label htmlFor="md">First Name</label>
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={first_name}
                      id="md"
                      type="text"
                      placeholder="Md"
                    />
                  </div>
                  <div className="user-bio">
                    <label htmlFor="ms">Last Name</label>
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      value={last_name}
                      id="ms"
                      type="text"
                      placeholder="Rimel"
                    />
                  </div>
                  <div className="user-bio">
                    <label htmlFor="mk"> Email</label>
                    <input
                      onChange={(e) => {
                        setEmailOrPhone(e.target.value);
                      }}
                      value={email_or_phone}
                      id="mk"
                      type="text"
                      placeholder="rimel1111@gmail.com"
                    />
                  </div>
                  <div className="user-bio">
                    <label htmlFor="ml">Address </label>
                    <input
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      value={address}
                      id="ml"
                      type="text"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                  <div className="user-bio">
                    <label htmlFor="ph">Phone </label>
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={phone}
                      id="ph"
                      type="tel"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="account-password">
                  <p>Password Changes</p>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="text"
                    placeholder="Current Passwod"
                  />
                  <input type="text" placeholder="New Passwod" />
                  <input type="text" placeholder="Confirm New Passwod" />
                </div>
              </div>
              <div className="submits">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </button>
                <button>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
