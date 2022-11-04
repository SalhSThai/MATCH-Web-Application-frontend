import React from 'react';

export default function MatchedStatus() {
  return (
    <div className='my-8 py-2 pl-10 flex flex-col gap-3 w-full border-l-2 border-r-2 border-slate-400 '>
      <div className='text-white'>Matched</div>
      <div className='text-white text-[40px]'>23</div>
      <div className='text-white text-xs opacity-50'>23 couples matched</div>
    </div>
  );
}
