import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import LoginAndRegisterModel from '../components/LoginAndRegisterModel/LoginAndRegisterModel';
import Suggestions from '../components/Suggestions/Suggestions';
import TopToolbar from '../components/TopToolbar/TopToolbar';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='default-container'>
        <TopToolbar />
        <div className='flex justify-center mt-5  md:mt-20'>
          <p className='font-bold text-secondary  border-b-2 border-b-orange-300 mb-7 '>
            עזרו לקהילה לזהות
          </p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Suggestions />
          <Suggestions />
          <Suggestions />
          <div className='flex justify-center mt-5  md:mt-20'>
            <p className='font-bold text-secondary  border-b-2 border-b-orange-300 mb-7 '>
              שיתופי תצפיות
            </p>
          </div>
          <Suggestions />
          <Suggestions />
          <Suggestions />
          <Suggestions />
          <div className='flex justify-center mt-5  md:mt-20'>
            <p className='font-bold text-secondary  border-b-2 border-b-orange-300 mb-7 '>
              עדכונים חמים
            </p>
          </div>
          <Suggestions />
          <Suggestions />
          <Suggestions />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
