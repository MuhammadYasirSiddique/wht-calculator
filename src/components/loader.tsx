import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={'/load.gif'}
        alt={'Loader Image'}
        width={200}
        height={200}
      />
      <p className='text-center text-3xl mt-4'>Loading...</p>
    </div>
  );
};

export default Loading;
