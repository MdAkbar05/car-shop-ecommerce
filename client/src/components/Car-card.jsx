import React from "react";
import { useDispatch } from "react-redux";
import { fetchCarById } from "../features/carSlice";
import { useNavigate } from "react-router-dom";

const CardCar = ({ img, price, name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReview = () => {
    dispatch(fetchCarById(id));
    navigate("/review");
  };
  return (
    <div className="w-72 h-auto shadow-xl py-3 px-4 rounded-lg">
      <img src={img} alt="" className="w-full h-60 p-2 rounded-lg" />
      <div className="flexCenter flex-col">
        <div className="font-bold">{name}</div>
        <div>Starting from</div>
        <div className="font-bold text-red-600">${price}</div>
        <div className="flex gap-x-2">
          <button className="darkBtn w-full" onClick={handleReview}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
