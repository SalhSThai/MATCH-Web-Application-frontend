import React from 'react';

export default function GenderMale() {
  return (
    <div className='border border-1 border-slate-500 rounded-xl p-3 flex gap-5 justify-center items-center'>
      <div className='rounded-full border-2 w-10 h-10'></div>
      <div>
        <div className='text-slate-400'>Male</div>
        <div className='text-white font-bold'>34</div>
      </div>
    </div>
  );
}
