import { Avatar } from 'flowbite-react';
import React from 'react';

function MessageContent() {
  return (
    <div className='flex w-full gap-5 py-3'>
      <Avatar rounded={true} />
      <div className='w-[300px]'>
        <div>NAME</div>
        <div>MESSAGE</div>
      </div>
      <div>DATE</div>
    </div>
  );
}

export default MessageContent;
