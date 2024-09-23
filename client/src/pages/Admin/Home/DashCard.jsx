import React from "react";
import { useNavigate } from "react-router-dom";

const DashCard = ({ car, icon, redirect, title, desc }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-md space-y-3 bg-primary w-60">
      <div className="flexCenter gap-x-2">
        <div>
          <div>{icon}</div>
        </div>
        <div className="text-lg font-medium">{title}</div>
      </div>
      <div className="flexCenter flex-col">
        <div className="text-5xl">{car}</div>
        <div>
          {/* description  */}
          <div className="text-gray-300 text-sm text-center">{desc}</div>
        </div>
      </div>
      <div className="flexCenter">
        <button className="w-full lightBtn" onClick={() => navigate(redirect)}>
          View All
        </button>
      </div>
    </div>
  );
};

export default DashCard;
