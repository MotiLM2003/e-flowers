import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import support1 from '../../images/support-1.png';
import support2 from '../../images/support-2.png';
import { motion } from 'framer-motion';
const Support = () => {
  return (
    <Layout>
      <div className='default-container'>
        <div className='flex items-center justify-center my-5'>
          <p className='font-bold text-secondary  border-b-4 border-b-orange-300 mb-7 text-xl  w-[120px] text-center '>
            תומכים
          </p>
        </div>
        <motion.div
          className='flex flex-col md:flex-row items-center md:justify-center  gap-[1.6rem] md:gap-[4.5rem]   min-h-[310px] md:min-h-[170px]'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 120 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <Image
              width='280px'
              height='180px'
              src={support2}
              alt='support kkl '
            />
          </div>
          <div>
            <Image
              width='280px'
              height='120px'
              src={support1}
              alt='support 2 '
            />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-center my-10 text-lg'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 120 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className='text-secondary  '
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 120 }}
            transition={{ duration: 0.7 }}
          >
            טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה
            טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה
            <br />
            טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה
            <br />
            טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה
            טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיקה טקסט בדיק
            <br />
          </motion.p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Support;
