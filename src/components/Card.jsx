import React from "react";

const Card = ({ url, title, description, className }) => {
  return (
    <div
      className={`relative h-[300px] col-span-3 rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300 bg-white ${className}`}
    >
      <img className="p-3 rounded-lg h-[270px] object-cover" src={url} alt="" />
      <div className="absolute z-20 bottom-3 bg-fuchsia-400 rounded-md p-2 left-3 hover:scale-105 transition-all ease-in-out duration-300">
        <h4 className="text-center font-bold">{title}</h4>
        <p className="text-center font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
