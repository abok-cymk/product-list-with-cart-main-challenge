import { X } from 'lucide-react';
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">
          {item.quantity}x @ ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold">${item.total.toFixed(2)}</p>
        <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
          <X className='h-4 w-4'/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;