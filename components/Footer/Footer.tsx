import React from 'react';
import Image from 'next/image';
import footerImage from '../../images/footer.png';
const Footer = () => {
  return (
    <div className='h-[200px] relative flex mt-3 md:mt-16'>
      <Image src={footerImage} alt='footer' objectFit='fill' layout='fill' />
    </div>
  );
};

export default Footer;
