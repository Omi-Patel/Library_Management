import React from "react";

const StatisticsCard = ({ title, count }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  );
};

export default StatisticsCard;
