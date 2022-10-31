import React from 'react';

export default function OnlineStatus() {
  return (
    <div className='py-10 pl-10 flex flex-col gap-3 w-full'>
      <div className='text-white'>Online</div>
      <div className='text-white text-[40px]'>78</div>
      <div className='text-white text-xs opacity-50'>78 peoples online</div>
    </div>
  );
}
