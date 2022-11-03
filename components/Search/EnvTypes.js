import React from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react';

const EnvTypes = () => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value} className='search-rb'>
      <div className='flex flex-reverse flex-wrap max-w-[180px] justify-center gap-3'>
        <div>
          <Radio size='sm' colorScheme='orange' value='1'>
            אדום
          </Radio>
        </div>
        <div>
          <Radio size='sm' colorScheme='orange' value='2'>
            מוגן
          </Radio>
        </div>
        <div>
          <Radio size='sm' colorScheme='orange' value='3'>
            פולש
          </Radio>
        </div>
        <div>
          <Radio size='sm' colorScheme='orange' value='4'>
            נדיר
          </Radio>
        </div>
        <div>
          <Radio size='sm' colorScheme='orange' value='5'>
            בסיכון
          </Radio>
        </div>
      </div>
    </RadioGroup>
  );
};

export default EnvTypes;
