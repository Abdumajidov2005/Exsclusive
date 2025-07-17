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
import { getLikeData, getProductData } from "../services/api";
import Cart from "../pages/cart/Cart";

function Routerer() {
  const [userModal, setUserModal] = useState(false);
  const [userToken, setUserToken] = useState(getToken());
  const [product, setProduct] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState(product);
  const [modalProduct, setModalProduct] = useState(false);

  const [likeData, setLikeData] = useState([]);

  const [cardLoad, setCardLoad] = useState(false);
  const [cardLoad2, setCardLoad2] = useState(false);
  const [cardLoad3, setCardLoad3] = useState(false);
  const [cardLoad4, setCardLoad4] = useState(false);

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
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar
          filterData={filterData}
          userModal={userModal}
          setUserModal={setUserModal}
          userToken={userToken}
          setUserToken={setUserToken}
          likeData={likeData}
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
          <Route path="/deteils/:id" element={<Deteils />} />
          <Route
            path="/category/:id"
            element={
              <CategoryFilter
                setProduct={setProduct}
                setLikeData={setLikeData}
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
                setModalProduct={setModalProduct}
                setProduct={setProduct}
                setLikeData={setLikeData}
                cardLoad4={cardLoad4}
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
              />
            }
          />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routerer;
