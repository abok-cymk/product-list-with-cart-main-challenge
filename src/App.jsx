import React from 'react';
import DesertCardLayout from './components/DesertCardLayout';

const App = () => {
  return (
    <div className='font-redHatText font-400 max-w-5xl mx-auto mt-8'>
      <h1 className='font-700 text-rose-900 text-2xl mb-4'>Desserts</h1>
      <DesertCardLayout />
    </div>
  );
}

export default App;
