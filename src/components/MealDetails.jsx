import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const { meals } = useLoaderData();
  const {
    strMealThumb: img,
    strMeal: title,
    strInstructions: description,
    idMeal: id,
    strCategory,
    strArea,
    strYoutube
  } = meals[0];
  console.log(meals[0]);
  return (
    <div className="card w-1/2 bg-gray-500 shadow-xl container mx-auto text-white">
        <h4 className="text-3xl text-white my-4 mx-8">{title}</h4>
      <figure>
        <img className="rounded-xl h-80" src={img} alt={title} />
      </figure>
      <div className="card-body">
        <p>Category: {strCategory} </p>
        <p>Area: {strArea}</p>
        <p>{description}</p>
        <p>{strYoutube}</p>
      </div>
    </div>
  );
};

export default MealDetails;
