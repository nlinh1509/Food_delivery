import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>Explore our menu </h1>

      <p className="explore_menu_text">
        Choose from a diverse menu featuring a detectable array of dishes
        crafted with the finest, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus quia odit molestiae consequuntur quae
        voluptates id soluta repellendus consectetur reiciendis.
      </p>

      <div className="explore_menu_list">
        {/* menu_list là 1 mảng */}
        {/* map là 1 vòng lặp */}

        {/* index là vị trí trong mảng */}
        {/* items là dữ liệu của một món ăn trong danh sách. */}

        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore_menu_list_item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
export default ExploreMenu;
