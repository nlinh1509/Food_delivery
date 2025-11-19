import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  // useState là khởi tạo giá trị ban đầu khi mở web
  const [current_menu, update_menu] = useState("home");
  
  const{getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <div className="navbar">
      <Link to = '/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar_menu">
        {/* khi click vào home, update_menu là home */}
        {/* lúc này current_menu là home sẽ được active, 
        nếu k thì là rỗng (không có gì xảy ra)  */}
        <Link
          to="/"
          onClick={() => update_menu("home")}
          className={current_menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => update_menu("menu")}
          className={current_menu === "menu" ? "active" : ""}
        >
          menu
        </a>

        <a
          href="#app_download"
          onClick={() => update_menu("mobile_app")}
          className={current_menu === "mobile_app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => update_menu("contact_us")}
          className={current_menu === "contact_us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar_search_icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>

          <div className={getTotalCartAmount()=== 0 ? "" :"dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
