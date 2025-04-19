import React, { useState } from "react";
import CartIcon from "./CartIcon";
import AddToCartOverlay from "./AddToCartOverlay";

const DesertCard = ({ photo, category, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(!isHovered);

  return (
    <div className="w-auto h-auto">
      <img
        src={photo}
        alt={name}
        className={`rounded-lg object-cover ${
          isHovered ? "border-2 border-custom-red" : ""
        }`}
      />
      <div className="relative mt-8">
        <span className="text-xs font-600 text-rose-300">{category}</span>
        <h3 className="text-base font-600 text-rose-900">{name}</h3>

        {isHovered ? (
          <AddToCartOverlay />
        ) : (
          <AddToCartButton title="Add to Cart" onMouseOver={handleMouseOver} />
        )}
        <p className="text-custom-red font-600 text-sm">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const AddToCartButton = ({ title, onMouseOver, onMouseOut }) => {
  return (
    <button
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="font-600 cursor-pointer text-xs absolute -top-14 translate-x-1/2 bg-rose-50 flex items-center rounded-full px-6 sm:px-2 py-2 border border-[#87635A] text-rose-900 shadow text-nowrap w-1/2"
    >
      <CartIcon />
      {title}
    </button>
  );
};

export default DesertCard;
