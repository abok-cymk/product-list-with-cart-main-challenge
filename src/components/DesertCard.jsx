import { ShoppingCart } from "lucide-react";
import React from "react";
import CartIcon from "./CartIcon";

const DesertCard = ({ photo, category, name, price }) => {
  return (
    <div className="w-auto h-auto">
      <img src={photo} alt={name} className="rounded-lg object-cover"/>
      <div className="relative mt-8">
        <span className="text-xs font-600 text-rose-300">{category}</span>
        <h3 className="text-base font-600 text-rose-900">{name}</h3>
        <AddToCartButton title="Add to Cart" />
        <p className="text-custom-red font-600 text-sm">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const AddToCartButton = ({ title }) => {
    return (
        <button className="font-600 cursor-pointer text-sm absolute -top-14 translate-x-1/3 bg-rose-50 flex items-center rounded-full px-6 py-2 border border-[#87635A] text-rose-900 shadow">
            <CartIcon />
            {title}
        </button>
    );
}

export default DesertCard;
