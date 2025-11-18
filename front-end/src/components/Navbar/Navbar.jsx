import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  // useState là khởi tạo giá trị ban đầu khi mở web
  const [current_menu, update_menu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar_menu">
        {/* khi click vào home, update_menu là home */}
        {/* lúc này current_menu là home sẽ được active, 
        nếu k thì là rỗng (không có gì xảy ra)  */}
        <Link to = '/'
          onClick={() => update_menu("home")}
          className={current_menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#explore_menu"
          onClick={() => update_menu("menu")}
          className={current_menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        
        <a href="#app_download"
          onClick={() => update_menu("mobile_app")}
          className={current_menu === "mobile_app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => update_menu("contact_us")}
          className={current_menu === "contact_us" ? "active" : ""}
        >
          contact us
        </a>
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
