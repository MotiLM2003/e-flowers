import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import heart from '../../images/heart.svg';
import notifications from '../../images/notifications.png';
import account from '../../images/account.png';
import Cookies from 'universal-cookie';
import MenuIcon from '../MenuIcon/Menu';
import LoginAndRegisterModel from '../LoginAndRegisterModel/LoginAndRegisterModel';
import Link from 'next/link';

const cookies = new Cookies();

const Header = () => {
  const [menuId, setMenuId] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const handleMenuId = (id: number) => {
    setMenuId(id);
    cookies.set('menuId', id, { path: '/' });
  };

  useEffect(() => {
    const menuCookie = cookies.get('menuId');
    if (!menuCookie) {
      console.log('undefiend');
    } else {
      console.log('found menuId: ' + menuCookie);
      setMenuId(Number(menuCookie));
    }
  }, []);

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
            <div
              className=' flex flex-col justify-center items-center  cursor-pointer'
              onClick={() => setIsLoginOpen(true)}
            >
              <div>
                <Image src={account} alt='Logo' />
              </div>
              <div className='hidden md:block text-xs'>התחבר \ הרשם</div>
            </div>
            <div className='md:hidden'>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <nav className=' gap-2 text-sm px-2 md:px-4 justify-center hidden md:flex'>
        <div
          onClick={() => handleMenuId(0)}
          className={`${menuId === 0 ? 'text-primary' : ''} cursor-pointer`}
        >
          <Link href='/'>בית</Link>
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(1)}
          className={`${menuId === 1 ? 'text-primary' : ''} cursor-pointer`}
        >
          זיהוי צמח
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(2)}
          className={`${menuId === 2 ? 'text-primary' : ''} cursor-pointer`}
        >
          <Link href='/search'>חיפוש צמח</Link>
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(3)}
          className={`${menuId === 3 ? 'text-primary' : ''} cursor-pointer`}
        >
          שאלות מהקהילה
        </div>
        <div>|</div>

        <div
          onClick={() => handleMenuId(4)}
          className={`${menuId === 4 ? 'text-primary' : ''} cursor-pointer`}
        >
          פרסומים ותצפיות
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(5)}
          className={`${menuId === 5 ? 'text-primary' : ''} cursor-pointer`}
        >
          <Link href='/support'>תומכים</Link>
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(6)}
          className={`${menuId === 6 ? 'text-primary' : ''} cursor-pointer`}
        >
          עדכונים
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(7)}
          className={`${menuId === 7 ? 'text-primary' : ''} cursor-pointer`}
        >
          כתבו לנו
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(8)}
          className={`${menuId === 8 ? 'text-primary' : ''} cursor-pointer`}
        >
          תנאי שימוש
        </div>
        <div>|</div>
        <div
          onClick={() => handleMenuId(9)}
          className={`${menuId === 9 ? 'text-primary' : ''} cursor-pointer`}
        >
          <Link href='/about'>אודות</Link>
        </div>
      </nav>
      <LoginAndRegisterModel
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
        }}
      />
    </header>
  );
};

export default Header;
