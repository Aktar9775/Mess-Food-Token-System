import React from "react";
import "./FoodCatagory.css";
function FoodCatagory() {
  return (
    <div>
      <div className="foodCat container">
        <span style={{ color: "white" }}>Food</span>
        <span style={{ color: "black" }}> Categories</span>
        <div className="row smcard">
          <div className="col ">
            <h2>Breakfast</h2>
          </div>
          <div className="col">
            <h2>Lunch</h2>
          </div>
          <div className="col">
            <h2>Dinner</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCatagory;
