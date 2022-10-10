import Image from 'next/image';
import React from 'react';
import camara from '../../images/camara.png';
import glass from '../../images/glass.png';
import link from '../../images/link.png';
const TopToolbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-10 mt-10'>
      <div className='toolbar-card'>
        <div className='flex flex-col items-center justify-center p-2'>
          <div>
            <Image src={camara} alt='Camara' />
          </div>
          <div className='text-secondary font-bold font-xl'>זיהוי צמח</div>
          <div className='text-sm'>זיהוי AI/קהילה</div>
        </div>
      </div>
      <div className='toolbar-card'>
        <div className='flex flex-col items-center justify-center p-2'>
          <div>
            <Image src={glass} alt='Camara' />
          </div>
          <div className='text-secondary font-bold font-xl'>מנוע חיפוש</div>
        </div>
      </div>
      <div className='toolbar-card'>
        <div className='flex flex-col items-center justify-center p-2'>
          <div>
            <Image src={link} alt='Camara' />
          </div>
          <div className='text-secondary font-bold font-xl'>שיתוף</div>
          <div className='text-sm'>תצפית\תמונות\פריחה\טיול</div>
        </div>
      </div>
    </div>
  );
};

export default TopToolbar;
