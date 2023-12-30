import React from 'react'
import Image from 'next/image';

const NoInternet = () => {
    return (
        <div className=' flex flex-col items-center justify-center mx-5 h-screen'>
          
          <div className=''>
            <Image src={'/checkinternet.png'} alt={'Client-Server connection with Database via Internet '} width={300} height={300} />
          </div>

          <div className='text-center mb-8'>
            
            <p className='mt-4 text-2xl text-gray-600'>
               Check your Internet Connection.
            </p>
          </div>
        </div>
      );
}

export default NoInternet