import FirstZustandComponent from '@/components/FirstZustandComponent';
import SecondZustandComponent from '@/components/SecondZustandComponent';
import React from 'react';

const ZustandUsage = () => {
  return (
    <>
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-5'>
        Zustand
      </h1>
      <FirstZustandComponent />
      <SecondZustandComponent />
    </>
  );
};

export default ZustandUsage;
