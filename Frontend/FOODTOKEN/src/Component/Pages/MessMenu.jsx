import React from "react";
import "./MessMenu.css";

const MessMenu = () => {
  const menu = {
    Monday: {
      Breakfast: "Poha, Tea/Coffee",
      Lunch: "Dal, Rice, Roti, Mixed Veg",
      Dinner: "Paneer Butter Masala, Naan, Rice, Salad",
    },
    Tuesday: {
      Breakfast: "Idli, Sambar, Coconut Chutney",
      Lunch: "Chole, Rice, Roti, Aloo Fry",
      Dinner: "Veg Biryani, Raita, Papad",
    },
    Wednesday: {
      Breakfast: "Aloo Paratha, Curd, Pickle",
      Lunch: "Rajma, Rice, Roti, Seasonal Veg",
      Dinner: "Dum Aloo, Jeera Rice, Roti, Salad",
    },
    Thursday: {
      Breakfast: "Upma, Chutney, Tea/Coffee",
      Lunch: "Kadhi, Rice, Roti, Bhindi Fry",
      Dinner: "Vegetable Pulao, Raita, Salad",
    },
    Friday: {
      Breakfast: "Dosa, Sambar, Chutney",
      Lunch: "Dal Tadka, Rice, Roti, Cabbage Sabzi",
      Dinner: "Veg Manchurian, Fried Rice, Soup",
    },
    Saturday: {
      Breakfast: "Puri, Chana Masala, Tea/Coffee",
      Lunch: "Mix Dal, Rice, Roti, Lauki Sabzi",
      Dinner: "Veg Kofta, Naan, Jeera Rice, Salad",
    },
    Sunday: {
      Breakfast: "Sandwich, Tea/Coffee",
      Lunch: "Paneer Curry, Rice, Roti, Salad",
      Dinner: "Khichdi, Kadhi, Papad, Pickle",
    },
  };

  return (
    <div className="mess-menu container">
      <h1 className="text-center mb-4">7-Day Vegetarian Mess Menu</h1>
      <div className="row">
        {Object.entries(menu).map(([day, meals]) => (
          <div key={day} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header text-center">
                <h5 className="card-title">{day}</h5>
              </div>
              <div className="card-body">
                <p>
                  <strong>Breakfast:</strong> {meals.Breakfast}
                </p>
                <p>
                  <strong>Lunch:</strong> {meals.Lunch}
                </p>
                <p>
                  <strong>Dinner:</strong> {meals.Dinner}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessMenu;
