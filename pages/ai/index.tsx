import { Button } from '@chakra-ui/react';
import React from 'react';
import CamaraIcon from '../../components/Icons/CamaraIcon';
import HeartIcon from '../../components/Icons/HeartIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import Layout from '../../components/Layout/Layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { isMobile } from 'react-device-detect';
import helpImage1 from '../../images/ai_help_1.png';
import helpImage2 from '../../images/ai_help_2.png';
import helpImage3 from '../../images/ai_help_3.png';
import Image from 'next/image';
import GalleryIcon from '../../components/Icons/Gallery';

const FlowerAI = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAIOpen, setIsAIOpen] = React.useState(false);

  const initAISearch = () => {
    // console.log('here');
    // console.log(isMobile);

    setIsAIOpen(true);
  };
  return (
    <Layout>
      <div className='default-container'>
        <div className='flex flex-col  items-center   '>
          <div className='flex items-center justify-center my-5'>
            <p className='font-bold text-secondary  border-b-4  border-b-primary mb-2 text-2xl  w-[120px] text-center '>
              זיהוי צמח
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <div
              className='cursor-pointer flex justify-center items-center gap-2 text-secondary  bg-gradient-to-r from-[#FFA500] to-[#FFD700] transition duration-500  w-[180px] text-center p-1 rounded shadow hover:shadow-lg'
              onClick={initAISearch}
            >
              <SearchIcon />
              <button>חיפוש חדש</button>
            </div>
            <div className='cursor-pointer flex justify-center items-center gap-2 text-secondary bg-gradient-to-r from-[#FFA500] to-[#FFD700] transition duration-500  min-w-[180px] text-center p-1 rounded shadow hover:shadow-lg'>
              <HeartIcon />
              <button>שאל את הקהילה</button>
            </div>
            <div
              className='cursor-pointer flex justify-center items-center gap-2 text-secondary bg-gradient-to-r from-[#FFA500] to-[#FFD700] transition duration-500  w-[180px] text-center p-1 rounded shadow hover:shadow-lg'
              onClick={() => setIsOpen(true)}
            >
              <CamaraIcon />
              <button>הנחיות צילום</button>
            </div>
          </div>
        </div>
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
              <div className='flex flex-col md:flex-row  md:justify-around p-4 '>
                <div className='flex flex-col  justify-center items-center gap-3 mb-4'>
                  <Image
                    src={helpImage1}
                    objectFit='contain'
                    width={50}
                    height={50}
                    alt='Map Image'
                  />
                  <p className='text-secondary text-sm text-center  max-w-[150px]'>
                    כדאי לצלם את הפרח, <br />
                    מקרוב ובפוקוס
                  </p>
                </div>
                <div className='flex flex-col justify-center items-center  gap-3 mb-4'>
                  <Image
                    src={helpImage2}
                    objectFit='contain'
                    width={50}
                    height={50}
                    alt='Map Image'
                  />
                  <p className='text-secondary text-sm text-center max-w-[150px]'>
                    אם אין פרח:
                    <br />
                    אפשר לצלם את העלים מקרוב.
                  </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                  <Image
                    src={helpImage3}
                    objectFit='contain'
                    width={50}
                    height={50}
                    alt='Map Image'
                  />
                  <p className='text-secondary text-sm text-center max-w-[150px]'>
                    ממולץ לשמור על תאורה אחידה (שמש או צל אחיד בכל תמונה)
                  </p>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isAIOpen}
          onClose={() => setIsAIOpen(false)}
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
              <div className='flex flexw justify-around p-4 '>
                <div className='flex flex-col  justify-center items-center gap-3 mb-4'>
                  <div className='cursor-pointer'>
                    <GalleryIcon />
                  </div>
                  <p className='text-secondary text-sm text-center  max-w-[150px]'>
                    צלם תמונה
                  </p>
                </div>
                <div className='flex flex-col justify-center items-center  gap-3 mb-4'>
                  <div className='cursor-pointer'>
                    <CamaraIcon size={64} />
                  </div>
                  <p className='text-secondary text-sm text-center max-w-[150px]'>
                    פתח גלריה
                  </p>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </Layout>
  );
};

export default FlowerAI;
