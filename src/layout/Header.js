import React from 'react';
// import logo from '../asset/logo/match.png';
// import logo from '../../src/asset/logo/newlogo.png';
// import logo from '../../src/asset/logo/logo-no-background.png';
import logo from '../../src/asset/logo/match-hight.png';

export default function Header() {
  return (
    <div className='flex items-center justify-start w-full py-5 gap-5 px-5 drop-shadow-lg rounded-b-lg'>
      <div>
        <img className='h-[40px] w-full' src={logo} alt='logo' />
      </div>
      {/* <div className=''>MATCH</div> */}
    </div>
  );
}
