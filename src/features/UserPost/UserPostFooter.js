import { Avatar } from 'flowbite-react';
import React from 'react';
import SendIcon from '../../asset/logo/SendIcon';
import { CommentIcon, LikeIcon } from '../../asset/SeeYourProfile/Icon';

function UserPostFooter() {
  return (
    <>
      <div className="flex justify-between items-center mx-7 border-b-2">
        <button type="button">
          <div className="mt-2 mb-2">...Like</div>
        </button>
        <button type="button">
          <div className="mt-2 mb-2">...Comments</div>
        </button>
      </div>
      <div className="flex justify-around items-center mt-1 mb-1 ">
        <button type="button">
          <LikeIcon />
        </button>
        <button type="button">
          <CommentIcon />
        </button>
      </div>
      <div className="w-full h-[50px] flex items-center gap-3 px-2">
        <Avatar rounded={true} />
        <input className="bg-[#ffeef0] w-full h-[30px] rounded-xl"></input>
        <SendIcon />
      </div>
    </>
  );
}

export default UserPostFooter;
