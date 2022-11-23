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
	{ image: leafShape1, name: 'גזור', isActive: false },
	{ image: leafShape2, name: 'גליל', isActive: false },
	{ image: leafShape3, name: 'דמוי לב', isActive: false },
	{ image: leafShape4, name: 'מאוצבע', isActive: false },
	{ image: leafShape5, name: 'מחולק לאונות', isActive: false },
	{ image: leafShape6, name: 'מחטני', isActive: false },
	{ image: leafShape7, name: 'מנוצה פעמיים', isActive: false },
	{ image: leafShape8, name: 'מנוצה', isActive: false },
	{ image: leafShape9, name: 'סרגלני', isActive: false },
	{ image: leafShape10, name: 'קשקשי', isActive: false },
];

const shape2 = [
	{ image: leafArrangements1, name: 'דורים', isActive: false },
	{ image: leafArrangements2, name: 'מסורגים', isActive: false },
	{ image: leafArrangements3, name: 'נגדיים', isActive: false },
	{ image: leafArrangements4, name: 'שושנת עלים', isActive: false },
];

const shape3 = [
	{ image: leafEdges1, name: 'שפת עלה מופרצת', isActive: false },
	{ image: leafEdges2, name: 'שפת עלה משוננת', isActive: false },
	{ image: leafEdges3, name: 'שפת עלה תמימה', isActive: false },
];
type Props = {
	startIngIndex: number;
	onShapeChange: (value: string, isIn: boolean) => void;
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

const FlowerShape = ({ startIngIndex, onShapeChange }: Props) => {
	const [currentShapes, setShape] = React.useState(getShape(startIngIndex));

	return (
		<div>
			<div className='grid grid-cols-3 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-6 gap-x-6'>
				{currentShapes.map((shape, index) => {
					return (
						<div
							key={index}
							className={`border  ${
								shape.isActive ? 'border-primary border-2' : 'border-gray-400'
							} p-[3px] rounded-xl cursor-pointer transition duration-300 hover:scale-[1.2]`}
							onClick={() => {
								const newItem = currentShapes[index];
								newItem.isActive = !newItem.isActive;
								currentShapes[index] = newItem;
								setShape([...currentShapes]);
								onShapeChange(newItem.name, newItem.isActive);
							}}
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
