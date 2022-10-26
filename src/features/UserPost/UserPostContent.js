import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import UserPostFooter from './UserPostFooter';
import iu from '../../asset/profileUser/iu.png';
import ShowMoreText from 'react-show-more-text';

export default function UserPostContent() {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className="flex gap-3 items-center mt-2 py-2 px-3 ">
        <Avatar rounded={true} />
        <div>
          <div> USERNAME</div>
          <a className="text-xs text-gray-500">Times Ago</a>
        </div>
      </div>
      <div className="bg-[#ff99e0] w-full  mt-3 py-3 px-2 ">
        <ShowMoreText
          className="text-xs font-mali"
          lines={2}
          more={'Show More'}
          less={'Show Less'}
          onClick={onClick}
          expanded={expand}
          width={400}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit
          natus eligendi veniam et nobis quidem ratione tempore, laboriosam
          voluptatum quos, quibusdam omnis error minus placeat tempora illo
          expedita adipisci? 
         
        </ShowMoreText> 
      </div>
      <img src={iu} />
      <UserPostFooter />
    </>
  );
}
