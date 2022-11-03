import React from 'react';
import { Checkbox, CheckboxGroup, CheckboxIcon } from '@chakra-ui/react';

const months = [
  'ינואר',
  'פברואר',
  'מרץ',
  'אפריל',
  'מאי',
  'יוני',
  'יולי',
  'אוגוסט',
  'ספטמבר',
  'אוקטובר',
  'נובמבר',
  'דצמבר',
];

const FlowersMonths = () => {
  return (
    <div className='grid grid-cols-4  grid-cols-reverse gap-1 '>
      {months.map((month, index) => {
        return (
          <div key={index} className='flex-1 text-1'>
            <Checkbox size='sm' colorScheme='orange'>
              {month}
            </Checkbox>
          </div>
        );
      })}
    </div>
  );
};

export default FlowersMonths;
