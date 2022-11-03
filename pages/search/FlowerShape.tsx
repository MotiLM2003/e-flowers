import React from 'react';
import Image from 'next/image';

// Images
import TempFlower from '../../images/leave-temp.png';

const shapes = [
  { image: TempFlower },
  { image: TempFlower },
  { image: TempFlower },
  { image: TempFlower },
  { image: TempFlower },
  { image: TempFlower },
];

const FlowerShape = () => {
  return (
    <div>
      <div className='grid grid-cols-3 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-6 gap-x-6'>
        {shapes.map((shape, index) => {
          return (
            <div key={index}>
              <Image
                src={shape.image}
                objectFit='contain'
                width={50}
                height={50}
                alt='Map Image'
              />
            </div>
          );
        })}
        {/* <Image
        src={map}
        objectFit='contain'
        width={300}
        height={300}
        alt='Map Image'
      /> */}
      </div>
    </div>
  );
};

export default FlowerShape;
