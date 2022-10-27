import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import UserPostFooter from './UserPostFooter';
import iu from '../../asset/profileUser/iu.png';
import ShowMoreText from 'react-show-more-text';

export default function UserPostContent({ post }) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className="flex gap-3 items-center mt-2 py-2 px-3 ">
        <Avatar rounded={true} img={post.User.profileImage} />
        <div>
          <div>
            {' '}
            {post.User.firstName} {post.User.lastName}
          </div>
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
          {post.text}
        </ShowMoreText>
      </div>
      <img src={post.image ? post.image : ''} />
      <UserPostFooter />
    </>
  );
}
