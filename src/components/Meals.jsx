import React, { useEffect, useState } from "react";
import Meal from "./Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=A")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
//   console.log(meals);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl text-white mt-16">
        Your Favorite Food
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
