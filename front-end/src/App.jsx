import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOder" element={<PlaceOrder />} />
        </Routes>
      </div>
      
      {/* bỏ footer ra riêng để có thể nằm ở đáy màn hình, và k cần roll chung  */}
      <Footer />
    </>
  );
};

export default App;
