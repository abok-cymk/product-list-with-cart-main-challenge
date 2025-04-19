import React, { useState } from "react";
import DefaultCart from "./DefaultCart";
import ItemsCount from "./ItemsCount";


const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);

  const handleAddItem = () => {
    setTotalItems((prevCount) => prevCount + 1);
  };

  const handleRemoveItem = () => {
    setTotalItems((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="shadow bg-white rounded-lg w-1/2 h-min py-4 px-3">
      <div className="flex items-center gap-2 text-custom-red font-700">
        <h1>Your Cart</h1>
        <ItemsCount initialCount={totalItems} />
      </div>
      
      <DefaultCart />
    </div>
  );
};

export default Cart;