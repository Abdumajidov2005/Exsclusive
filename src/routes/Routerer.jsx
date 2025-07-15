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
import { getProductData } from "../services/api";

function Routerer() {
  const [userModal, setUserModal] = useState(false);
  const [userToken, setUserToken] = useState(getToken());
  const [product, setProduct] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState(product);
  const [cardLoad, setCardLoad] = useState(false);

  const filterData = (text) => {
    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchFilterData(filtered);
  };

  useEffect(() => {
    setCardLoad(true);
    getProductData()
      ?.then(setProduct)
      .finally(() => setCardLoad(false));
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
        />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={product}
                setProduct={setProduct}
                cardLoad={cardLoad}
                setCardLoad={setCardLoad}
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
          <Route path="/category/:id" element={<CategoryFilter />} />
          <Route path="/like" element={<Like />} />
          <Route
            path="/searchs"
            element={<Search searchFilterData={searchFilterData} />}
            cardLoad={cardLoad}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routerer;
