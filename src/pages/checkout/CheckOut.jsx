import React, { useEffect, useState } from "react";
import "./CheckOut.css";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/config";
import { toast } from "react-toastify";
import { getToken } from "../../services/token";

function CheckOut({ cartData }) {
  const navigate = useNavigate()
  const [cartCounter, setCartCounter] = useState({});
  const [shippingType, setShippingType] = useState("free");
  const [coupon, setCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [payingAmount, setPayingAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [saveData, setSaveData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addressData = () => {
    if (!email.includes("@")) return toast.error("Email noto‘g‘ri kiritilgan");
    if (!payingAmount) return toast.error("To‘lov summasi kiritilmagan");
    if (!paymentType) return toast.error("To‘lov turi tanlanmagan");

    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      first_name: firstName,
      company,
      street_address: streetAddress,
      apartment,
      city,
      phone,
      email,
      paying_amount: payingAmount,
      payment_type: paymentType,
      save_data: saveData,
      cart_item_ids: cartData?.cart_items?.map((item) => item.id),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/order/create/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast.success(result?.message)
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        toast.error("Buyurtma yuborishda xatolik yuz berdi");
      });
  };

  const shippingOptions = {
    free: 0,
    standard: 5000,
    express: 15000,
  };

  useEffect(() => {
    if (cartData?.cart_items) {
      calculateTotal(cartData.cart_items);
    }
  }, [cartData, cartCounter, coupon, shippingType]);

  const calculateTotal = (items, couponCode = coupon) => {
    let total = items?.reduce((acc, item) => {
      const qty = cartCounter[item.id] || item.quantity;
      return acc + item.subtotal * qty;
    }, 0);

    if (couponCode.toLowerCase() === "codial") {
      total -= total * 0.1;
    }

    total += shippingOptions[shippingType] || 0;
    setTotalPrice(total.toFixed(0));
  };

  const subtotal =
    cartData?.cart_items?.reduce((acc, item) => {
      const qty = cartCounter[item.id] || item.quantity;
      return acc + item.subtotal * qty;
    }, 0) || 0;

  return (
    <div className="check-out">
      <div className="container">
        <p className="wiever">
          <span>Account</span>
          <span>/</span>
          <span>My Account</span>
          <span>/</span>
          <span>Product</span>
          <span>/</span>
          <Link to="/cart">View Cart</Link>
          <span>/</span>
          <span>CheckOut</span>
        </p>
        <div className="billing">
          <h3>Billing Details</h3>
          <div className="deliver-product">
            <div className="information">
              <div className="apperment">
                <label>First Name*</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Company Name</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Street Address*</label>
                <input
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Apartment, floor, etc. (optional)</label>
                <input
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Paying Amount</label>
                <input
                  value={payingAmount}
                  onChange={(e) => setPayingAmount(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Payment Type</label>
                <input
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Town/City*</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Phone Number*</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperment">
                <label>Email Address*</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
              </div>
              <div className="apperments">
                <input
                  checked={saveData}
                  onChange={(e) => setSaveData(e.target.checked)}
                  type="checkbox"
                />
                <label>
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>

            <div className="pays">
              <div className="cart-list">
                {cartData?.cart_items?.map((item) => (
                  <div key={item?.id} className="listin">
                    <div className="listin-games">
                      <img
                        src={
                          item?.pictures?.length
                            ? `${baseUrl}${item.pictures[0].file}`
                            : "/imgs/default.png"
                        }
                        alt={item?.title || "Product image"}
                      />
                      <p>
                        {item?.title.length < 20
                          ? item.title
                          : item.title.slice(0, 20) + "..."}
                      </p>
                    </div>
                    <p>
                      ${item.subtotal * (cartCounter[item.id] || item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="subtotal-end">
                <div className="total-end">
                  <p>Subtotal:</p>
                  <p>${subtotal.toFixed(0)}</p>
                </div>
                <div className="total-end">
                  <p>Shipping:</p>
                  <select
                    value={shippingType}
                    onChange={(e) => setShippingType(e.target.value)}
                  >
                    <option value="free">Free</option>
                    <option value="standard">Standard ($5000)</option>
                    <option value="express">Express ($15000)</option>
                  </select>
                </div>
                <div className="total-end">
                  <p>Total:</p>
                  <p>${totalPrice}</p>
                </div>
              </div>

              <div className="payoral">
                <div className="payoral-payment">
                  <p>
                    <input
                      name="brand"
                      type="radio"
                      value="bank"
                      checked={paymentType === "bank"}
                      onChange={(e) => setPaymentType(e.target.value)}
                    />
                    <label>Bank</label>
                  </p>
                  <img src="/imgs/checout.png" alt="Bank" />
                </div>
                <div className="cash">
                  <input
                    name="brand"
                    type="radio"
                    value="cash"
                    checked={paymentType === "cash"}
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label>Cash on delivery</label>
                </div>
              </div>

              <div className="applys">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon Code"
                />
                <button
                  onClick={() => {
                    if (coupon.toLowerCase() === "codial") {
                      toast.success("Kupon qo‘llandi");
                    } else {
                      toast.error("Noto‘g‘ri kupon kodi");
                    }
                    calculateTotal(cartData?.cart_items, coupon);
                  }}
                >
                  Apply Coupon
                </button>
                <button
                  onClick={()=>{
                    addressData()
                    navigate("/")
                  }}
                  className="places"
                  disabled={isLoading}
                >
                  {isLoading ? "Yuborilmoqda..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
