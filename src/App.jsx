import React from 'react';
import DesertCardLayout from './components/DesertCardLayout';
import Cart from './components/Cart';


const App = () => {
  return (
    <div className='font-redHatText font-400 max-w-5xl mx-auto mt-8 mb-6'>
      <h1 className='font-700 text-rose-900 text-2xl mb-4'>Desserts</h1>
      <div className='flex gap-6'>
        <DesertCardLayout />
        <Cart />
      </div>
      
    </div>
  );
}

export default App;
