import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginAndRegisterModel = ({ isOpen, onClose }: Props) => {
  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='0%'
          backdropBlur='5px'
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className='mt-[2rem]'>
            <Tabs variant='enclosed'>
              <TabList>
                <Tab>
                  <p className='text-lg font-bold text-secondary border-b-4 border-primary max-w-[200px] text-center mb-4'>
                    התחברות
                  </p>
                </Tab>
                <Tab>
                  {' '}
                  <p className='text-lg font-bold text-secondary border-b-4 border-primary max-w-[200px] text-center mb-4'>
                    הרשמה
                  </p>
                </Tab>
              </TabList>
              <TabPanels className='min-h-[350px] flex items-center justify-center'>
                <TabPanel>
                  <div
                    style={{ overflow: 'hidden' }}
                    className='flex  flex-col items-center  justify-center '
                  >
                    <div>
                      <div className=' flex flex-col gap-4 w-[200px] ןאקצ  md:w-[300px]'>
                        <div>
                          <input className='input w-full' placeholder='דוא"ל' />
                        </div>
                        <div>
                          <input className='input w-full' placeholder='דוא"ל' />
                        </div>
                        <div>
                          <input
                            type='button'
                            className='button-primary input w-full font-bold'
                            value='התחבר >>'
                          />
                        </div>
                        <p className='text-secondary text-xs font-bold underline'>
                          שחכת סיסמא?
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    style={{ overflow: 'hidden' }}
                    className='flex  flex-col items-center  justify-center '
                  >
                    <div className=' flex  gap-4'>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          שם פרטי
                        </p>
                        <input className='input w-full' />
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          טלפון&nbsp;
                          <span className='text-xs text-gray-400'>
                            (אופציונלי)
                          </span>
                        </p>
                        <input className='input w-full' />
                      </div>
                    </div>
                    <div className=' flex  gap-4'>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          שם משפחה
                        </p>
                        <input className='input w-full' />
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          ישוב&nbsp;
                          <span className='text-xs text-gray-400'>
                            (אופציונלי)
                          </span>
                        </p>
                        <input className='input w-full' />
                      </div>
                    </div>
                    <div className=' flex  gap-4'>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          איימיל
                        </p>
                        <input className='input w-full' />
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-sm text-secondary font-bold mb-2'>
                          טלפון&nbsp;
                          <span className='text-xs text-gray-400'>
                            (אופציונלי)
                          </span>
                        </p>
                        <input className='input w-full' />
                      </div>
                    </div>
                    <div className='mt-4 flex gap-1 '>
                      <input type='checkbox' />
                      <p className='text-xs text-secondary'>
                        אני מאשר\ת את תנאי השימוש באנציקלופרח
                      </p>
                    </div>
                    <div className='w-full px-20 mt-6'>
                      <button className='button-primary w-full'>הירשם</button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginAndRegisterModel;
