import React from 'react';

const FlowerColors = () => {
  const colors = [
    '#182028',
    '#f0e057',
    '#aee56e',
    '#f69a3a',
    '#42bdf5',
    '#4e65e2',
    '#b559e5',
    '#f8665b',
    '#ffffff',
    '#ff15ba',
    '#38d9f6',
    '#ff9ee2',
  ];

  return (
    <div className=''>
      <div className='grid grid-cols-4 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-2 gap-x-4'>
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className={`flex-1 text-1  w-[30px] h-[30px] rounded border border-gray-300 cursor-pointer hover:scale-[1.1] transition duration-75`}
              style={{ background: color }}
            >
              &nbsp;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowerColors;
