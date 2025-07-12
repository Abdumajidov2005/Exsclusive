import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import Account from "../pages/account/Account";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";
import Servise from "../pages/servise/Servise";
import Home from "../pages/home/Home";
import ScrollToTop from "../components/scrolltop/Scroltop";
import Deteils from "../pages/deteil/Deteils";
import Like from "../pages/likes/Like";

function Routerer() {
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar userModal={userModal} setUserModal={setUserModal} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servise" element={<Servise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/deteils/:id" element={<Deteils />} />
          <Route path="/like" element={<Like/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routerer;
