import Image from 'next/image';
import React from 'react';
import link from '../../images/link.png';
import heart from '../../images/heart.svg';
const Suggestions = () => {
  return (
    <div className='bg-gray-100 rounded shadow hover:shadow-lg  hover:bg-white  relative    transition duration-100 p-2 mb-8 w-[80%]'>
      <div className='flex flex-col md:flex-row  p-2'>
        <div className='basis-1/2'>
          <p className='text-orange-300 mb-1'>שלומית לוי</p>
          <p className='text-secondary'>
            שלום רב, אשמח אם תעזרו לי לזאות <br /> את הפרח היפה הזה :) <br />
            תודה.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row gap-3 mt-2'>
          <div className='suggestions-image'>
            <Image
              objectFit='fill'
              layout='fill'
              className='h-fit'
              src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg'
              alt='example '
            />
          </div>
          <div className='suggestions-image'>
            <Image
              objectFit='fill'
              layout='fill'
              className='h-fit'
              src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg'
              alt='example '
            />
          </div>
          <div className='suggestions-image'>
            <Image
              objectFit='fill'
              layout='fill'
              className='h-fit'
              src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg'
              alt='example '
            />
          </div>
        </div>
      </div>
      <div className='absolute left-2 bottom-[-30px]'>
        <div className='flex gap-3 flex-row-reverse items-center justify-center'>
          <div className='relative h-[16px] w-[16px] cursor-pointer'>
            <Image
              objectFit='contain'
              layout='fill'
              src={link}
              alt='example '
            />
          </div>
          <div className='flex gap-1 flex-row-reverse items-center cursor-pointer'>
            <div className='relative h-[16px] w-[16px] flex'>
              <Image
                objectFit='contain'
                layout='fill'
                src={heart}
                alt='example '
              />
            </div>
            <p className='text-xs text-gray-400'>322</p>
          </div>
          <p className='text-xs text-gray-400'>22.10.22</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
