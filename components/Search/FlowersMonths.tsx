import React from 'react';
import { Checkbox, CheckboxGroup, CheckboxIcon } from '@chakra-ui/react';
import { monthsText } from 'helpers/globalObjects';

type Props = {
	onMonthChange: (month: string, isIn: boolean) => void;
};
const FlowersMonths = ({ onMonthChange }: Props) => {
	return (
		<div className='grid grid-cols-4  grid-cols-reverse gap-1 '>
			{monthsText.map((month, index) => {
				return (
					<div key={index} className='flex-1 text-1'>
						<Checkbox
							size='sm'
							colorScheme='orange'
							onChange={(e) => {
								console.log(e.target.checked);
								onMonthChange(String(index + 1), e.target.checked);
							}}
						>
							{month}
						</Checkbox>
					</div>
				);
			})}
		</div>
	);
};

export default FlowersMonths;
