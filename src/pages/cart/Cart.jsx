import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown, FaSortUp } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { baseUrl } from "../../services/config";
import { delCartData, getCartData } from "../../services/api";
import { toast } from "react-toastify";

function Cart({ cartData, setCartData }) {
  const [cartCounter, setCartCounter] = useState({});
  const [coupon, setCoupon] = useState("");
  const [shippingType, setShippingType] = useState("free");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const shippingOptions = {
    free: 0,
    standard: 5000,
    express: 15000,
  };

  useEffect(() => {
    getCartData().then((data) => {
      setCartData(data);
      calculateTotal(data.cart_items);
    });
  }, []);

  useEffect(() => {
    if (cartData?.cart_items) {
      calculateTotal(cartData?.cart_items);
    }
  }, [cartCounter, coupon, shippingType]);

  const calculateTotal = (items, couponCode = coupon) => {
    let total = items?.reduce((acc, item) => {
      const qty = cartCounter[item?.id] || item?.quantity;
      return acc + item.subtotal * qty;
    }, 0);

    if (couponCode.toLowerCase() === "codial") {
      total -= total * 0.1; // 10% chegirma
    }

    total += shippingOptions[shippingType] || 0;
    setTotalPrice(total.toFixed(0));
  };

  return (
    <div className="one-cart">
      <div className="container">
        <p className="go-home">
          <Link to="/">Home</Link> <span>/</span> <span>Cart</span>
        </p>

        <div className="one-cart-shopping">
          <div className="quanlity main">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>

          <div className="quanlity-tartibi">
            {cartData?.cart_items?.length === 0 ? (
              <div className="cartimgs">
                <div className="cart-imgs">
                  <img src="/imgs/cart.gif" alt="" />
                </div>
                <p>Hozircha mahsulotlar yo‘q</p>
                <p>Iltimos mahsulotlar tanlang</p>
              </div>
            ) : (
              cartData?.cart_items?.map((item) => (
                <Link
                  to={`/deteils/${item?.product_id}`}
                  key={item?.id}
                  className="quanlity"
                >
                  <h3>
                   {
                    console.log(item)
                    
                   }
                    <div className="cart-img">
                      <span
                        onClick={async (e) => {
                          e.preventDefault();
                          const updated = await delCartData(
                            item?.id,
                            setCartData
                          );
                          if (updated) {
                            calculateTotal(updated.cart_items);
                          }
                        }}
                      >
                        <HiOutlineXMark />
                      </span>

                      <img
                        src={`${baseUrl}${item?.pictures[0]?.file}`}
                        alt=""
                      />
                    </div>
                    {item?.title.length < 20
                      ? item?.title
                      : item?.title.slice(0, 20) + "..."}
                  </h3>
                  <h3>${item?.discount_price}</h3>
                  <h3>
                    <div className="startup">
                      <p>{cartCounter[item.id] || item.quantity}</p>
                      <p>
                        <span
                          onClick={() =>
                            setCartCounter((prev) => ({
                              ...prev,
                              [item.id]: (prev[item.id] || item.quantity) + 1,
                            }))
                          }
                        >
                          <FaSortUp />
                        </span>
                        <span
                          onClick={() => {
                            const currentQty =
                              cartCounter[item.id] || item.quantity;
                            if (currentQty > 1) {
                              setCartCounter((prev) => ({
                                ...prev,
                                [item.id]: currentQty - 1,
                              }));
                            } else {
                              toast.warn("Kamida 1 ta mahsulot tanlaysiz");
                            }
                          }}
                        >
                          <FaCaretDown />
                        </span>
                      </p>
                    </div>
                  </h3>
                  <h3>
                    $
                    {(
                      item?.subtotal * (cartCounter[item.id] || item.quantity)
                    ).toFixed(0)}
                  </h3>
                </Link>
              ))
            )}
          </div>

          <div className="btn-cartshop">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Return To Shop
            </button>
            <button onClick={() => calculateTotal(cartData?.cart_items)}>
              Update Cart
            </button>
          </div>
        </div>

        <div className="checouting">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (coupon.toLowerCase() === "codial") {
                toast.success("Kupon muvaffaqiyatli qo‘llandi!");
              } else {
                toast.error("Noto'g'ri kupon kodi!");
              }
              calculateTotal(cartData?.cart_items, coupon);
            }}
            className="coupon"
          >
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              type="text"
              placeholder="Coupon Code"
            />
            <button>Apply Coupon</button>
          </form>

          <div className="processing">
            <h4>Cart Total</h4>

            <div className="feature">
              <p>Subtotal:</p>
              <p>
                $
                {cartData?.cart_items
                  ?.reduce((acc, item) => {
                    const qty = cartCounter[item.id] || item.quantity;
                    return acc + item.subtotal * qty;
                  }, 0)
                  .toFixed(0)}
              </p>
            </div>

            <div className="feature">
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

            <div className="feature">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>

            <div className="btn-cheouting">
              <button
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
