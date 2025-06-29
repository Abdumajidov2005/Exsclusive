import React from "react";
import "./Footer.css";
import { TbSend2 } from "react-icons/tb";
import { BsQrCode } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="linklar">
            <ul className="support-link">
              <li>Exclusive</li>
              <li>Subscribe</li>
              <li>
                <h3>Get 10% off your first order</h3>
                <form action="#" className="searchs">
                  <input type="text" placeholder="Enter your email" />
                  <p className="send">
                  <TbSend2 />
                  </p>
                </form>
              </li>
            </ul>
            <ul className="support-link">
              <li className="asosiy">Support</li>
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
            <ul className="support-link">
              <li className="asosiy">Account</li>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
            <ul className="support-link">
              <li className="asosiy">Quick Link</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
            <ul className="support-link">
              <li className="asosiy">Download App</li>
              <li>Save $3 with App New User Only</li>
              <li>
                <div className="qrcode">
                   <BsQrCode />
                </div>
                <div className="store">
                   <img src="/imgs/footer.png" alt="app" />
                   <img src="/imgs/footer2.png" alt="apple" />
                </div>
              </li>
              <li>
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FiTwitter />
                </p>
                <p>
                  <FaInstagram />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
