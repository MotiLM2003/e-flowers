import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import Register from '../Register/Register';

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
                      <div className=' flex flex-col gap-4 w-[200px]   md:w-[300px]'>
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
                  <Register />
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
