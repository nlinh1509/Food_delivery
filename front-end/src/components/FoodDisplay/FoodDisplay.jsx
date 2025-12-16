import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// category là đại diện cho nhãn
// category = "all" là nói về tất cả
// category = "salad" là chỉ nói về salad
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food_display" id="food_display">
      <h2>Top dishes near you</h2>
      
      <div className="food_display_list">
        {food_list.map((item, index) => {
          // || là hoặc
          // tức là category hiện tất cả hoặc category = item.category
          // (category đã đươc phân loại sẵn ở trong asset)
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
