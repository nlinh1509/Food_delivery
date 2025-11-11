import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar_menu">
        <li>menu</li>
        <li>home</li>
        <li>mobile_app</li>
        <li>contact us</li>
      </ul>

      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar_search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
