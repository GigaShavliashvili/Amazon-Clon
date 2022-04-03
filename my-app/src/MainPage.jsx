import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import GamingAccs from "./Page/GamingAccs/GamingAccs";
import Product from "./Page/Product/Product";
import Detail from './Page/ProductDetail/Detail';
import Cart from './Page/CartPage/Cart';
const MainPage = () => {
  return (
    <div>
        <Header />
        <Routes >
          <Route index element={<Home />} />
          <Route path="/Gaming%20accessories" element={<GamingAccs />} />
          <Route path="/Product%20List" element={<Product />} />
          <Route path ="/Detail/:id" element={<Detail/>}/>
          <Route path ="/Cart" element={<Cart/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default MainPage