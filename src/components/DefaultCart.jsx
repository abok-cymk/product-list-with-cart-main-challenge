import React from "react";

const DefaultCart = () => {

  return (
    <>
      <div className="flex items-center mt-4 justify-center">
        <img src="./src/assets/images/illustration-empty-cart.svg" alt="Illustration Empty Cart" />
      </div>
      <p className="text-center text-xs font-600 text-rose-500">Your added items will appear here</p>
    </>
  );
};

export default DefaultCart;
