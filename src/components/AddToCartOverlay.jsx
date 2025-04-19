import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react';

const AddToCartOverlay = ({ onAdd, onRemove }) => {
  const [addToCart, setAddToCart] = useState(0);

  const handleAddMore = () => {
    setAddToCart((prevCount) => prevCount + 1);
    if (onAdd) {
      onAdd(); // Notify parent to increase the cart count
    }
  };

  const handleRemoveMore = () => {
    if (addToCart > 0) {
      setAddToCart((prevCount) => prevCount - 1);
      if (onRemove) {
        onRemove(); // Notify parent to decrease the cart count
      }
    }
  };

  return (
    <button className='w-1/2 font-600 absolute -top-14 translate-x-1/2 cursor-pointer text-sm  text-rose-100 flex items-center justify-around rounded-full py-2 border border-[#87635A] shadow bg-custom-red'>
      <CirclePlus onClick={handleAddMore} className='h-4 w-4'/>
      {addToCart}
      <CircleMinus onClick={handleRemoveMore} className='h-4 w-4'/>
    </button>
  );
}

export default AddToCartOverlay;
