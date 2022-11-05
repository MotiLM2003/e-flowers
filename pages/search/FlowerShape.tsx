import React from 'react';
import Image from 'next/image';

// Images
import leafArrangements1 from '../../images/leafs/leaf_arrangements_1.png';
import leafArrangements2 from '../../images/leafs/leaf_arrangements_2.png';
import leafArrangements3 from '../../images/leafs/leaf_arrangements_3.png';
import leafArrangements4 from '../../images/leafs/leaf_arrangements_4.png';
import leafShape1 from '../../images/leafs/leaf_shape_1.png';
import leafShape2 from '../../images/leafs/leaf_shape_2.png';
import leafShape3 from '../../images/leafs/leaf_shape_3.png';
import leafShape4 from '../../images/leafs/leaf_shape_4.png';
import leafShape5 from '../../images/leafs/leaf_shape_5.png';
import leafShape6 from '../../images/leafs/leaf_shape_6.png';
import leafShape7 from '../../images/leafs/leaf_shape_7.png';
import leafShape8 from '../../images/leafs/leaf_shape_8.png';
import leafShape9 from '../../images/leafs/leaf_shape_9.png';
import leafShape10 from '../../images/leafs/leaf_shape_10.png';
import leafEdges1 from '../../images/leafs/leaf_edges_1.png';
import leafEdges2 from '../../images/leafs/leaf_edges_2.png';
import leafEdges3 from '../../images/leafs/leaf_edges_3.png';

const shapes = [
  { image: leafArrangements1 },
  { image: leafArrangements2 },
  { image: leafArrangements3 },
  { image: leafArrangements4 },
];

const shape2 = [
  { image: leafShape1 },
  { image: leafShape2 },
  { image: leafShape3 },
  { image: leafShape4 },
  { image: leafShape5 },
  { image: leafShape6 },
  { image: leafShape7 },
  { image: leafShape8 },
  { image: leafShape9 },
  { image: leafShape10 },
];

const shape3 = [
  { image: leafEdges1 },
  { image: leafEdges2 },
  { image: leafEdges3 },
];
type Props = {
  startIngIndex: number;
};

const getShape = (startIngIndex: number) => {
  if (startIngIndex === 0) {
    return shapes;
  } else if (startIngIndex === 4) {
    return shape2;
  } else {
    return shape3;
  }
};

const FlowerShape = ({ startIngIndex }: Props) => {
  return (
    <div>
      <div className='grid grid-cols-3 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-6 gap-x-6'>
        {getShape(startIngIndex).map((shape, index) => {
          return (
            <div
              key={index}
              className='border border-gray-400 p-[3px] rounded-xl cursor-pointer transition duration-300 hover:scale-[1.2]'
            >
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
