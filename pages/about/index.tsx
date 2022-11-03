import React from 'react';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';

import aboutImage from '../../images/about.png';
const About = () => {
  return (
    <Layout>
      <div className='default-container'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center justify-center my-5'>
            <p className='font-bold text-secondary  border-b-4 border-b-orange-300 mb-7 text-xl  w-[120px] text-center '>
              תומכים
            </p>
          </div>
          <motion.p
            className='text-secondary mb-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
          <motion.div
            className='min-h-[300px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={aboutImage} alt='support 2 ' objectFit='contain' />
          </motion.div>
          <motion.p
            className='text-secondary my-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
        </div>
      </div>
    </Layout>
  );
};

export default About;
