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
          <ModalBody className='mt-[2rem] max-w-[500px]'>
            <div
              style={{ overflow: 'hidden' }}
              className='flex  flex-col w-full items-center '
            >
              <p className='text-xl font-bold text-secondary border-b-4 border-primary max-w-[200px] text-center'>
                התחברות
              </p>
              <div>
                <div className='w-full'>
                  <input className='input w-full' placeholder='דוא"ל' />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginAndRegisterModel;
