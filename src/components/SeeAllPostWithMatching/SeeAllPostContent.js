import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import SeeAllPostFooter from './SeeAllPostFooter';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function SeeAllPostBody({ post }) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className="flex gap-3 items-center mt-2 py-2 px-3 ">
        <Avatar rounded={true} img={post?.User?.profileImage} />
        <div>
          <div>
            {' '}
            {post?.User?.firstName} {post?.User?.lastName}
          </div>
          <a className="text-xs text-gray-500">
            {' '}
            {timeAgo.format(new Date(post.createdAt) - 30 * 1000, 'round')}
          </a>
        </div>
      </div>
      <div className=" w-full  mt-3 py-3 px-5 ">
        <ShowMoreText
          className="text-base font-mali"
          lines={2}
          more={'Show More'}
          less={'Show Less'}
          onClick={onClick}
          expanded={expand}
          width={400}
        >
          {post?.text}
        </ShowMoreText>
      </div>
      <img src={post?.image ? post?.image : ''} />
      <SeeAllPostFooter post={post} />
    </>
  );
}
