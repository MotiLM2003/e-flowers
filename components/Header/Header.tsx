import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../images/logo.png';
import heart from '../../images/heart.svg';
import account from '../../images/account.png';
import Cookies from 'universal-cookie';
import MenuIcon from '../MenuIcon/Menu';
import LoginAndRegisterModel from '../LoginAndRegisterModel/LoginAndRegisterModel';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

// Icons components
import NotificationsIcon from '../Icons/NotificationsIcon';

const cookies = new Cookies();
const menuItems = [
  { text: 'בית', url: '/' },
  { text: 'זיהוי צמח', url: '/ai' },
  { text: 'חיפוש צמח', url: '/search' },
  { text: 'שאלות מהקהילה', url: '/ai' },
  { text: ' פרסומים ותצפיות', url: '/' },
  { text: 'תומכים', url: '/support' },
  { text: 'עדכונים', url: '/ai' },
  { text: 'כתבו לנו', url: '/ai' },
  { text: 'תנאי שימוש', url: '/ai' },
  { text: 'אודות', url: '/about' },
];


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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

  const renderMenu = (isSeperator: boolean) => {
    return (
      <>
        {menuItems.map((item, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => handleMenuId(index)}
                className={`${
                  menuId === index ? 'text-primary' : ''
                } cursor-pointer ${
                  !isSeperator
                    ? 'border-2 border-transparent border-b-orange-100 w-full text-center p-1 pb-3'
                    : null
                }`}
              >
                <Link href={`${item.url}`}>{item.text}</Link>
              </div>
              {isSeperator ? <div>|</div> : ''}
            </>
          );
        })}
      </>
    );
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
              <NotificationsIcon />
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
            <div className='md:hidden' onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <nav className=' gap-2 text-sm px-2 md:px-4 justify-center hidden md:flex'>
        {renderMenu(true)}
      </nav>
      <LoginAndRegisterModel
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
        }}
      />
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size='2xl'
      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='0%'
          backdropBlur='5px'
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className='mt-[2rem]'>
            <nav className='flex flex-col justify-center items-center gap-2 pb-8'>
              {renderMenu(false)}
            </nav>
          </ModalBody>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
