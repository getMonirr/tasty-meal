import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
    const {strMealThumb:img,strMeal:title,strInstructions:description, idMeal:id} = meal;
  return (
    <div className="card card-side bg-base-100 shadow-xl border-amber-100 border">
      <figure className="w-1/3 h-full">
        <img
        className="h-full"
          src={img}
          alt={title}
        />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title">{title}</h2>
        <p>{description.substring(0,300) + '...'}</p>
        <div className="card-actions underline text-m-bg">
          <Link to={`/meal/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
