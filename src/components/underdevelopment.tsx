// components/UnderConstruction.js
import React from 'react';
import Image from 'next/image';

const UnderDevelopment = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mx-4 lg:mx-20 my-10'>
      <div className='text-center lg:text-left mb-8 lg:mb-0'>
        <h1 className='text-4xl lg:text-6xl font-bold text-blue-700'>
        We working on something Exciting.
        </h1>
        <p className='mt-4 text-base lg:text-lg text-gray-600'>
           Stay Tuned!
        </p>
      </div>
      <div className='mx-auto lg:mx-0'>
        <Image src={'/underdevlopment.png'} alt={'Developer Working on web page development'} width={600} height={600} />
      </div>
    </div>
  );

};

export default UnderDevelopment;
