import React from 'react';
// import logo from '../asset/logo/match.png';
// import logo from '../../src/asset/logo/newlogo.png';
// import logo from '../../src/asset/logo/logo-no-background.png';
// import logo from '../../src/asset/logo/match-hight.png';
import logo from '../../src/asset/logo/match3.png';

export default function Header() {
  return (
    <div className='flex items-center justify-center w-full py-4 gap-5 drop-shadow-lg rounded-b-3xl'>
      <div>
        <img className='h-[60px] w-full' src={logo} alt='logo' />
      </div>
      {/* <div className=''>MATCH</div> */}
    </div>
  );
}
