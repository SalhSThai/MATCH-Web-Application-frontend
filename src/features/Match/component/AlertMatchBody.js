import React from 'react';
import lisa from '../../../asset/profileUser/lisa.png';
import iu from '../../../asset/profileUser/iu.png';

export default function AlertMatchBody() {
  return (
    <div className="flex items-center justify-center mt-20 mb-14">
      <div className=" w-[200px] -rotate-12 -mx-3">
        <img className="rounded-[40px]" src={lisa} alt="user card" />
      </div>
      <div className=" w-[200px] z-1 rotate-12 -mx-3">
        <img className="rounded-[40px]" src={iu} alt="user card" />
      </div>
    </div>
  );
}
