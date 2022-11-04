import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import { CommentIcon, LikeIcon } from '../../asset/SeeYourProfile/Icon';
import SeeYourProfileFooter from './SeeYourProfileFooter';
import ShowMoreText from 'react-show-more-text';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

function SeeYourProfileContent({ post }) {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <div className=" border border-groove">
      <div className="flex gap-3 items-center mt-2 py-2 px-3">
        <Avatar rounded={true} img={post?.User?.profileImage} />
        <div>
          {post?.User?.firstName}
          {post?.User?.lastName}
        </div>
        <a className="text-xs text-gray-500">
          {' '}
          {timeAgo.format(new Date(post.createdAt) - 30 * 1000, 'round')}
        </a>
      </div>
      <div className="w-full mt-3 py-3 px-2 ">
        <ShowMoreText
          className="text-xs font-mali"
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
      <SeeYourProfileFooter post={post} />
    </div>
  );
}

export default SeeYourProfileContent;
