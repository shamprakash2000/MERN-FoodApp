import React from "react";

const Homecard = ({ name, image, category, price }) => {
  return (
    <div className="bg-slate-300 p-2 rounded bg-white ">
      <div className="w-40 min-h-[150px]">
        <img src={image} className="h-40 w-full object-cover" />
      </div>
      <h3 className="fonr-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
      <p className="text-center text-slate-500 font-medium">{category}</p>
      <p className="text-center font-bold"><span className="text-red-400">₹</span><span>{price}</span></p>
    
    </div>
  );
};

export default Homecard;
