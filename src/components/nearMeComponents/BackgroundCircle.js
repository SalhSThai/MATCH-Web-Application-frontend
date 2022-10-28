import React from 'react';

export default function BackgroundCircle() {
  return (
    <>
      <div className='rounded-full bg-[#f18564] w-80 h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f09a80] w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f1bdad] w-52 h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f3dad3] w-36 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </>
  );
}
