import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import heart from '../../images/heart.svg';
import notifications from '../../images/notifications.png';
import account from '../../images/account.png';

const Header = () => {
  const [menuId, setMenuId] = useState(0);
  const handleMenuId = (id: number) => {
    setMenuId(id);
  };

  return (
    <header className='flex flex-col gap-4 default-container pb-2'>
      <div className='flex items-center flex-row-reverse '>
        <div className='flex flex-col items-center justify-center p-2 md:p-4 w-[80px]  cursor-pointer'>
          <div>
            <Image src={heart} alt='Heart' />
          </div>
          <div>תומכים</div>
        </div>
        <div className='grow flex items-center justify-center '>
          <Image src={logo} alt='Logo' />
        </div>
        <div className='flex flex-col items-center justify-center p-2 md:p-4 '>
          <div className='flex gap-2 md:gap-5 align-center justify-center flex-row-reverse'>
            <div className=' cursor-pointer'>
              <Image src={notifications} alt='Logo' />
            </div>
            <div className='flex flex-col justify-center items-center  cursor-pointer'>
              <div>
                <Image src={account} alt='Logo' />
              </div>
              <div className='text-xs'>התחבר \ הרשם</div>
            </div>
          </div>
        </div>
      </div>
      <nav className=' gap-2 text-sm px-2 md:px-4 justify-center hidden md:flex'>
        <div
          onClick={() => handleMenuId(0)}
          className={`${menuId === 0 ? 'text-default' : ''} cursor-pointer`}
        >
          בית
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(1)}
          className={`${menuId === 1 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          זיהוי צמח
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(2)}
          className={`${menuId === 2 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          חיפוש צמח
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(3)}
          className={`${menuId === 3 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          שאלות מהקהילה
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(4)}
          className={`${menuId === 4 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          פרסומים ותצפיות
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(5)}
          className={`${menuId === 5 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          עדכונים
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(6)}
          className={`${menuId === 6 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          כתבו לנו
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(7)}
          className={`${menuId === 7 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          תנאי שימוש
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(8)}
          className={`${menuId === 8 ? 'text-[#ffa255]' : ''} cursor-pointer`}
        >
          אודות
        </div>
      </nav>
    </header>
  );
};

export default Header;
