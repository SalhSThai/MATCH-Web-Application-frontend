import { Avatar } from 'flowbite-react';
import React from 'react';
import { ListIcon } from '../../asset/IconForChatRoom/Icon';
import { Back } from '../../asset/iconForSwipePage.js/IconOnProfile';

export default function HeaderChatRoom() {
  return (
    <div className="h-[80px] w-full">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex-grow">
          <div className="flex items-center gap-4 px-3">
            <button type="button">
              <Back />
            </button>
            <Avatar rounded={true} />
            <div>Name , LastName</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3">
          {
            // <div className="bg-[#ffeef0] rounded-xl w-[35px] h-[35px] flex items-center justify-center">
            //   <PhoneIcon />
            // </div>
            // <div className="bg-[#ffeef0] rounded-xl w-[35px] h-[35px] flex items-center justify-center">
            //   <VideoIcon />
            // </div> //
          }

          <div className="bg-[#ffeef0] rounded-xl w-[35px] h-[35px] flex items-center justify-center">
            <ListIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
