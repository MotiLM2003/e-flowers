import React from 'react';
import { Checkbox } from '@chakra-ui/react';


const list = ["אדום", "מוגן", "פולש", "נדיר", "בסיכון"]

  
const EnvTypes = ({state, onChange}) => {
    const [value, setValue] = React.useState('1');
    return ( 
        <div className='flex flex-wrap  gap-2 w-[180px] justify-center'>
         <Checkbox  size='sm' colorScheme='orange' isChecked={state.red} onChange={(e)=> {
            console.log(e.target.checked);
            onChange('red', e.target.checked);
         }}>
         אדום
      </Checkbox>
      <Checkbox  size='sm' colorScheme='orange' isChecked={state.protected} onChange={(e)=> {
        console.log(e.target.checked);
        onChange('protected', e.target.checked);
     }}>
מוגן  </Checkbox>
<Checkbox  size='sm' colorScheme='orange' isChecked={state.invasive} onChange={(e)=> {
    console.log(e.target.checked);
    onChange('invasive', e.target.checked);
 }}>
פולש  </Checkbox>
<Checkbox  size='sm' colorScheme='orange' isChecked={state.rare} onChange={(e)=> {
    console.log(e.target.checked);
    onChange('rare', e.target.checked);
 }}>
נדיר  </Checkbox>
<Checkbox  size='sm' colorScheme='orange' isChecked={state.danger} onChange={(e)=> {
    console.log(e.target.checked);
    onChange('danger', e.target.checked);
 }}>
בסיכון  </Checkbox>   
        </div>
        );
};

export default EnvTypes; 