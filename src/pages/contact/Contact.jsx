import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <>
      <div className="cals">
        <div className="container">
          <div className="visited">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <p>Contact</p>
          </div>
          <div className="writes">
            <div className="writes-num1">
              <div className="read">
                <h4>
                  <span>
                    <IoCallOutline />
                  </span>
                  Call To Us
                </h4>
                <p>
                  We are available 24/7, 7 days a week.
                </p>
                <p>
                  Phone: +8801611112222
                </p>
              </div>
              <div className="read">
                 <h4>
                  <span> <CgMail /></span>
                   Write To US
                 </h4>
                 <p>
                  Fill out our form and we will contact you within 24 hours.
                 </p>
                 <p>
                  Emails: customer@exclusive.com
                 </p>
                 <p>
                  Emails: support@exclusive.com
                 </p>
              </div>
            </div>
            <div className="writes-num2">
               <div className="about-human">
                   <input type="text" placeholder="Your Name *"/>  
                   <input type="text" placeholder="Your Email *"/>  
                   <input type="tel"  placeholder="Your Phone *"/>  
               </div>
               <textarea name="" placeholder="Your Massage" id=""></textarea>
               <button>Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
