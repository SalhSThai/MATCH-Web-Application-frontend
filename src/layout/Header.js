import React from 'react';
import logo from '../asset/logo/match.png';
export default function Header() {
  return (
    <div className='flex items-center justify-start w-full py-8 gap-5 px-5'>
      <div >
        <img className="h-[50px] w-[50px]" src={logo} alt="logo" />
      </div>
      <div className="">
      MATCH
      </div>
    </div>
  );
}
