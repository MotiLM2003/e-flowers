import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import { Radio, RadioGroup } from '@chakra-ui/react';

// Custom components
import EnvTypes from '../../components/Search/EnvTypes';
import FlowersMonths from '../../components/Search/FlowersMonths';
import FlowerColors from '../../components/Search/FlowerColors';
import Select from '../../components/Select/Select';

// Images
import map from '../../images/map.png';
import FlowerShape from './FlowerShape';
import { Input } from '@chakra-ui/react';

// Main component
const Search = () => {
  const [value, setValue] = React.useState('1');
  const [state, setState] = useState(() => {});

  return (
    <Layout>
      <div className='default-container'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center justify-center my-5'>
            <p className='font-bold text-secondary  border-b-4  border-b-primary mb-7 text-2xl  w-[320px] text-center '>
              חיפוש צמח לפי מאפיינים
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-[90%] md:w-[50%]'>
              <p className='text-secondary mb-2 font-bold text-md'>
                חיפוש לפי שם צמח
              </p>
              <div className='w-full'>
                <Input placeholder='הקלד שם צמח' />
              </div>
            </div>
            {/* main container */}
            <div className='flex flex-col md:gap-5  md:flex-row mt-5 w-full'>
              <div className='grow-1'>
                <div className='flex flex-col items-center justify-center my-5'>
                  <p className='font-bold text-secondary  border-b-4 border-b-primary mb-5 text-md  text-center  md:w-[60%] '>
                    שמירת טבע
                  </p>
                  <div>
                    <EnvTypes />
                  </div>
                  <div>
                    <Image
                      src={map}
                      objectFit='contain'
                      width={300}
                      height={300}
                      alt='Map Image'
                    />
                  </div>
                  <div className='w-full'>
                    <Select>
                      <>
                        <option>צורת חיים</option>
                        <option>בחירה 1</option>
                        <option>בחירה 2</option>
                        <option>בחירה 3</option>
                        <option>בחירה 4</option>
                      </>
                    </Select>
                  </div>
                </div>
              </div>
              <div className='grow-2 flex flex-col items-center'>
                <div className='flex items-center justify-center my-5 w-full'>
                  <p className='font-bold text-secondary  border-b-4 border-b-primary text-md  text-center   md:w-[60%]  '>
                    פריחה
                  </p>
                </div>

                <FlowersMonths />

                <p className='font-bold text-secondary text-sm  text-center   md:w-[60%]  md:mt-8 mb-3'>
                  צבע פריחה
                </p>
                <div className='w-full flex flex-col items-center justify-center'>
                  <FlowerColors />
                  <p className='font-bold text-secondary mt-3 mb-2 text-sm  text-center  md:w-[60%] '>
                    מספר עלי כותרת
                  </p>
                  <div className='mb-[3.2rem]'>
                    <RadioGroup
                      onChange={setValue}
                      value={value}
                      className='search-rb'
                    >
                      <div className='flex flex-reverse  max-w-[180px] justify-center gap-3'>
                        <div>
                          <Radio size='sm' colorScheme='orange' value='1'>
                            1
                          </Radio>
                        </div>
                        <div>
                          <Radio size='sm' colorScheme='orange' value='2'>
                            2
                          </Radio>
                        </div>
                        <div>
                          <Radio size='sm' colorScheme='orange' value='3'>
                            3
                          </Radio>
                        </div>
                        <div>
                          <Radio size='sm' colorScheme='orange' value='4'>
                            4
                          </Radio>
                        </div>
                        <div>
                          <Radio size='sm' colorScheme='orange' value='5'>
                            5
                          </Radio>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <Select>
                    <>
                      <option>בית גידול</option>
                      <option>בחירה 1</option>
                      <option>בחירה 2</option>
                      <option>בחירה 3</option>
                    </>
                  </Select>
                </div>
              </div>
              <div className='grow-1'>
                <div className='flex flex-col items-center justify-center my-5'>
                  <p className='font-bold text-secondary  border-b-4 border-b-primary mb-7 text-md  text-center  '>
                    תכונות ומבנה
                  </p>
                  <FlowerShape />
                  <Select cssClass='mt-8'>
                    <>
                      <option>צורת גבעול</option>
                      <option>בחירה 1</option>
                      <option>בחירה 2</option>
                      <option>בחירה 3</option>
                    </>
                  </Select>
                  <Select cssClass='mt-10'>
                    <>
                      <option>קוצים</option>
                      <option>בחירה 1</option>
                      <option>בחירה 2</option>
                      <option>בחירה 3</option>
                    </>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[90%] md:w-[40%] mt-1 md:mt-[3rem] rounded'>
            <button className='bg-green p-2 w-full rounded'>חיפוש </button>
          </div>
          <input
            accept='image/*'
            id='icon-button-file'
            type='file'
            capture='environment'
          />
        </div>
      </div>
    </Layout>
  );
};

export default Search;
