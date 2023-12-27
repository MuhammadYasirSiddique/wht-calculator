import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mx-4 lg:mx-20 my-10'>
      <div className='text-center lg:text-left mb-8 lg:mb-0'>
        <h1 className='text-4xl lg:text-6xl font-bold text-blue-700'>
          Empower Accuracy, Unleash Efficiency!
        </h1>
        <p className='mt-4 text-base lg:text-lg text-gray-600'>
          Your Ultimate Hub for Withholding Wonders.
        </p>
      </div>
      <div className='mx-auto lg:mx-0'>
        <Image src={'/hero.png'} alt={'Tax Consultant Working in his office'} width={800} height={800} />
      </div>
    </div>
  );
};

export default HomePage;
