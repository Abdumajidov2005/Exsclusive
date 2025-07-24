import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import Account from "../pages/account/Account";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import ScrollToTop from "../components/scrolltop/Scroltop";
import Deteils from "../pages/deteil/Deteils";
import Like from "../pages/likes/Like";
import SignUp from "../pages/signup/SignUp";
import { ToastContainer } from "react-toastify";
import { getToken } from "../services/token";
import CategoryFilter from "../pages/categoryFilter/CategoryFilter";
import Search from "../pages/searchPage/Search";
import { getCartData, getLikeData, getProductData } from "../services/api";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";

function Routerer() {
  const [userModal, setUserModal] = useState(false);
  const [userToken, setUserToken] = useState(getToken());
  const [product, setProduct] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [modalProduct, setModalProduct] = useState(false);

  const [likeData, setLikeData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const [cardLoad, setCardLoad] = useState(false);
  const [cardLoad2, setCardLoad2] = useState(false);
  const [cardLoad3, setCardLoad3] = useState(false);
  const [cardLoad4, setCardLoad4] = useState(false);

  const [shopModalId, setShopModalId] = useState(null);

  const filterData = (text) => {
    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchFilterData(filtered);
  };

  useEffect(() => {
    setCardLoad(true);
    setCardLoad2(true);
    setCardLoad3(true);
    getProductData()
      ?.then((data) => {
        setProduct(data);
        setSearchFilterData(data);
      })
      .finally(() => {
        setCardLoad(false);
        setCardLoad2(false);
        setCardLoad3(false);
      });
  }, []);

  useEffect(() => {
    setCardLoad4(true);
    getLikeData()
      .then(setLikeData)
      .finally(() => {
        setCardLoad4(false);
      });
    getCartData().then((data) => {
      setCartData(data);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={800} />
        <Navbar
          filterData={filterData}
          userModal={userModal}
          setUserModal={setUserModal}
          userToken={userToken}
          setUserToken={setUserToken}
          likeData={likeData}
          cartData={cartData}
          setCartData={setCartData}
        />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={product}
                setProduct={setProduct}
                setLikeData={setLikeData}
                cardLoad={cardLoad}
                setCardLoad={setCardLoad}
                modalProduct={modalProduct}
                setModalProduct={setModalProduct}
                setShopModalId={setShopModalId}
                shopModalId={shopModalId}
                setCartData={setCartData}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login setUserToken={setUserToken} />}
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/deteils/:id"
            element={<Deteils setCartData={setCartData} />}
          />
          <Route
            path="/category/:id"
            element={
              <CategoryFilter
                setProduct={setProduct}
                setLikeData={setLikeData}
                shopModalId={shopModalId}
                modalProduct={modalProduct}
                setShopModalId={setShopModalId}
                setModalProduct={setModalProduct}
                setCartData={setCartData}
              />
            }
          />
          <Route
            path="/like"
            element={
              <Like
                product={product}
                likeData={likeData}
                setCardLoad3={setCardLoad3}
                cardLoad3={cardLoad3}
                setProduct={setProduct}
                setLikeData={setLikeData}
                cardLoad4={cardLoad4}
                modalProduct={modalProduct}
                setModalProduct={setModalProduct}
                shopModalId={shopModalId}
                setShopModalId={setShopModalId}
              />
            }
          />
          <Route
            path="/searchs"
            element={
              <Search
                searchFilterData={searchFilterData}
                cardLoad2={cardLoad2}
                setProduct={setProduct}
                setLikeData={setLikeData}
                setSearchFilterData={setSearchFilterData}
                shopModalId={shopModalId}
                setShopModalId={setShopModalId}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartData={cartData} setCartData={setCartData} />}
          />
          <Route path="/checkout" element={<CheckOut cartData={cartData} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routerer;
