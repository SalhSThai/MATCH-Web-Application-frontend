import { Avatar } from 'flowbite-react';
import React from 'react';
import UserPostFooter from './UserPostFooter';
export default function UserPostContent() {
  return (
    <>
      <div className="flex gap-3 items-center mt-2 py-2 px-3 ">
        <Avatar rounded={true} />
        <div> USERNAME</div>
      </div>
      <div className="bg-[#ff99e0] w-full h-[350px] mt-3 py-3 px-2 ">
        Post Content
      </div>
      <UserPostFooter />
    </>
  );
}
