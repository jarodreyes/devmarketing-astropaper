import React from "react";

function Card({ title, description, index }) {
  // Array of background colors
  const bgColors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
  ];

  // Get a background color based on the card's index
  const bgColor = bgColors[index % bgColors.length];

  return (
    <div
      className={`${bgColor} m-2 flex h-72 w-full max-w-xs flex-col rounded-lg p-4 shadow-md transition-shadow duration-300 hover:shadow-lg`}
    >
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-md flex-1 text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
