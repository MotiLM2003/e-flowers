import React from 'react';

type Props = {
	onColorChange: (color: string, isIn: boolean) => void;
};
const FlowerColors = ({ onColorChange }: Props) => {
	const [colors, setColors] = React.useState([
		{ id: 1, color: '#008000', name: 'ירוק', isActive: true },
		{ id: 2, color: '#660022', name: 'בורדו', isActive: false },
		{ id: 3, color: '##ffb3cc', name: 'ורוד', isActive: false },
		{ id: 4, color: '#cce6ff', name: 'תכלת', isActive: false },
		{ id: 5, color: '#f2f2f2', name: 'לבן', isActive: false },
		{ id: 6, color: '#9900cc', name: 'סגול', isActive: false },
		{ id: 7, color: '#c20a38', name: 'אדום', isActive: false },
		{ id: 8, color: '#fbd9b6', name: 'קרם', isActive: false },
		{ id: 9, color: '#cccc00', name: 'צהוב', isActive: false },
		{ id: 10, color: '#664400', name: 'חום', isActive: false },
		{ id: 11, color: '#333333', name: 'שחור', isActive: false },
		{ id: 12, color: '#c2660a', name: 'כתום', isActive: false },
	]);

	return (
		<div className=''>
			<div className='grid grid-cols-4 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-2 gap-x-4'>
				{colors.map((item, index) => {
					return (
						<div
							key={index}
							className={`flex-1 text-1  w-[30px] h-[30px] rounded border border-gray-300 ${
								item.isActive
									? 'border-2 border-orange-500 shadow'
									: 'border-gray-300'
							} cursor-pointer hover:scale-[1.1] transition duration-75`}
							style={{ background: item.color }}
							onClick={() => {
								const newItem = colors[index];
								newItem.isActive = !newItem.isActive;
								colors[index] = newItem;
								setColors([...colors]);
								onColorChange(newItem.name, newItem.isActive);
							}}
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
