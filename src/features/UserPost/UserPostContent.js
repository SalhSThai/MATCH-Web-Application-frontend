import { Avatar } from 'flowbite-react';
import React from 'react';

export default function UserPostContent({ post }) {
  console.log(post);
  return (
    <>
      <div className="flex gap-3 items-center mt-2 py-2 px-3 ">
        <Avatar rounded={true} img={post.User.profileImage} />
        <div>
          {' '}
          {post.User.firstName} {post.User.lastName}
        </div>
      </div>
      <div className="bg-[#ff99e0] w-full h-[350px] mt-3 py-3 px-2 ">
        {post.text}
      </div>
    </>
  );
}
