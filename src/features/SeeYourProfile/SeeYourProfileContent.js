import { Avatar } from 'flowbite-react';
import React from 'react';
import { CommentIcon, LikeIcon } from '../../asset/SeeYourProfile/Icon';
import SeeYourProfileFooter from './SeeYourProfileFooter';

function SeeYourProfileContent() {
  return (
    <div className=" border border-groove">
      <div className="flex gap-3 items-center mt-2 py-2 px-3">
        <Avatar rounded={true} />
        <div>OTHER USERNAME</div>
      </div>
      <div className="bg-[#ff99e0] w-full h-[350px] mt-3 py-3 px-2">
        Post Content
      </div>
      <div className="flex justify-around mt-3 mb-3">
        <button type="button">
          <LikeIcon />
        </button>
        <button type="button">
          <CommentIcon />
        </button>
      </div>
      <div className="border border-groove">
        <SeeYourProfileFooter />
      </div>
    </div>
  );
}

export default SeeYourProfileContent;
