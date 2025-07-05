import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

function Account() {
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
            <div className="edit">
              <h1>Edit Your Profile</h1>
              <div className="edit-account-title">
                 <div className="user-bios">
                    <div className="user-bio">
                       <label htmlFor="md">First Name</label>
                       <input id="md" type="text"  placeholder="Md"/>
                    </div>
                     <div className="user-bio">
                       <label htmlFor="ms">Last Name</label>
                       <input id="ms" type="text"  placeholder="Rimel"/>
                    </div>
                     <div className="user-bio">
                       <label htmlFor="mk"> Email</label>
                       <input id="mk" type="text"  placeholder="rimel1111@gmail.com"/>
                    </div>
                     <div className="user-bio">
                       <label htmlFor="ml">Address </label>
                       <input id="ml" type="text"  placeholder="Kingston, 5236, United State"/>
                    </div>
                 </div>
                 <div className="account-password">
                     <p>
                      Password Changes
                     </p>
                     <input type="text" placeholder="Current Passwod"/>
                     <input type="text" placeholder="New Passwod"/>
                     <input type="text" placeholder="Confirm New Passwod"/>
                 </div>
              </div>
              <div className="submits">
                  <button>
                    Cancel
                  </button>
                  <button>
                    Save Changes
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
