import React from 'react';
import HambergerMenu from '../../asset/logo/HambergerMenu';
import UserIcon from '../../asset/logo/UserIcon';

export default function HeaderChatRoom() {
  return (
    <div className="h-[80px] w-full">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex-grow">
          <UserIcon />
        </div>
        <HambergerMenu />
      </div>
    </div>
  );
}
