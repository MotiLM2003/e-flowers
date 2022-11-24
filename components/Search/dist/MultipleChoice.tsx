import React from 'react';

type Props = {
	list:{ name: string; isActive: boolean; }[];
};
const MultipleChoice = ({ list }: Props) => {
	return (
		<div className='flex flex-wrap max-w-[340px] gap-2 p-2 justify-center'>
			{list.map((item) => {
				return (
					<div
						key={item.name}
						className=' p-1 border border-gray-400 rounded-xl text-gray-500 text-xs min-w-[40px] text-center'
					>
						{item.name}
					</div>
				);
			})}
		</div>
	);
};

export default MultipleChoice;
