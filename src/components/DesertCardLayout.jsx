import React from 'react';
import data from "../../data.json";
import ResponsiveLayout from './ResponsiveLayout';
import DesertCard from './DesertCard';

const DesertCardLayout = () => {
  return (
    <ResponsiveLayout cols='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' className='gap-4'>
      {data.map((item, item_idx) => (
        <DesertCard 
        key={item_idx}
        photo={item.image.desktop}
        category={item.category}
        name={item.name}
        price={item.price}
        />
      ))}
    </ResponsiveLayout>
  );
}

export default DesertCardLayout;
