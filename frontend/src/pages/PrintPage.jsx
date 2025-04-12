import React from "react";

const PrintPage = () => {
  const days = [
    {
      day: "Monday",
      meals: {
        Breakfast: ["Eggs", "Bread", "Butter"],
        Lunch: ["Wraps", "Chicken", "Lettuce"],
        Dinner: ["Beef", "Veggies", "Soy sauce"],
      },
    },
    {
      day: "Tuesday",
      meals: {
        Breakfast: ["Yogurt", "Berries", "Granola"],
        Lunch: ["Tortilla", "Cheese", "Veggies"],
        Dinner: ["Salmon", "Asparagus", "Lemon"],
      },
    },
    {
      day: "Wednesday",
      meals: {
        Breakfast: ["Pancake mix", "Syrup"],
        Lunch: ["Tuna", "Mayo", "Bread"],
        Dinner: ["Chicken", "Curry paste", "Rice"],
      },
    },
    {
      day: "Thursday",
      meals: {
        Breakfast: ["Bread", "Avocado"],
        Lunch: ["Rice", "Eggs", "Peas"],
        Dinner: ["Pasta", "Veggies"],
      },
    },
    {
      day: "Friday",
      meals: {
        Breakfast: ["Banana", "Berries", "Yogurt"],
        Lunch: ["Bacon", "Lettuce", "Tomato"],
        Dinner: ["Dough", "Sauce", "Cheese"],
      },
    },
    {
      day: "Saturday",
      meals: {
        Breakfast: ["Bread", "Eggs"],
        Lunch: ["Canned tomatoes", "Bread"],
        Dinner: ["Curry paste", "Coconut milk", "Chicken"],
      },
    },
    {
      day: "Sunday",
      meals: {
        Breakfast: ["Bagels", "Cream cheese"],
        Lunch: ["Chicken", "Beans", "Rice"],
        Dinner: ["Noodles", "Sauce", "Cheese"],
      },
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white text-gray-800">
      <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 w-full max-w-5xl pb-2 text-center">
        Weekly Meal Plan
      </div>
      <div className="flex flex-wrap gap-4 w-full max-w-5xl">
        {days.map((dayObj, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-0.5rem)] bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-base font-semibold text-blue-800 border-b border-slate-300 mb-2">
              {dayObj.day}
            </h2>
            {Object.entries(dayObj.meals).map(
              ([mealType, ingredients], idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {mealType}:
                  </h3>
                  <ul className="space-y-1">
                    {ingredients.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-3 h-3 border border-gray-600 rounded-sm inline-block hover:bg-gray-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintPage;
