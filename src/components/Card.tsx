import React from "react";
import { CardInterface } from "../Home/Tabs/TabPages/MyHome";

const Card = ({ buttonText, image, text, title }: CardInterface) => {
  return (
    <div className="w-full  h-72 rounded shadow-lg border   ">
      <div className=" w-full h-[50%]">
        <img src={image} alt={title} className=" object-cover w-full h-full" />
      </div>
      <div className=" flex flex-col h-[45%] justify-between mt-4  ">
        <h1 className=" font-bold mx-2">{title}</h1>
        <p className=" mx-2 text-gray-400 text-[14px]">{text}</p>
        <button className=" w-full bg-gray-700 hover:bg-gray-500 py-2 rounded text-white mt-2 text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
