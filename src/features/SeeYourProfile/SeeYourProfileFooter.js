import { Avatar } from 'flowbite-react';
import React from 'react';
import SendIcon from '../../asset/logo/SendIcon';

function SeeYourProfileFooter() {
  return (
    <div className="w-full h-[50px] flex items-center gap-3 px-2">
      <Avatar rounded={true} />
      <input className="bg-[#ffeef0] w-[350px] h-[30px] rounded-xl"></input>
      <SendIcon/>
    </div>
  );
}

export default SeeYourProfileFooter;
