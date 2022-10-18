import React, { useState } from 'react';
import {
  Like,
  MoreUesrDetail,
  Reject,
  SuperLike
} from '../asset/iconForSwipePage.js/IconOnProfile';
import UserDetailModal from '../features/UserDetail/UserDetailModal';

// import iu from '../asset/profileUser/iu.png';
export default function SwipePage() {
  const [isProfileShow, setIsProfileShow] = useState(false);

  const handleClickUserDetail = (e) => setIsProfileShow(true);
  const handleCloseUserDetail = (e) => setIsProfileShow(false);
  return (
    <div className='bg-cover bg-[url("/src/asset/profileUser/iu.png")] w-[400px] h-[500px] rounded-3xl relative'>
      <div className=" bg-gray-600 w-full h-[130px] bg-opacity-30 absolute bottom-0 flex justify-between px-5 pt-5 rounded-3xl">
        <div>
          <div className="text-white">NAME,AGE</div>
          <div className="text-white">OCCUPATION</div>
        </div>
        <button
          type="button"
          className="h-fit rounded-full cursor-pointer z-[1]"
          onClick={handleClickUserDetail}
        >
          <MoreUesrDetail />
        </button>
        <UserDetailModal
          isProfileShow={isProfileShow}
          handleCloseUserDetail={handleCloseUserDetail}
        />
      </div>
      <div className="flex justify-center gap-10 h-full w-full items-end translate-y-8">
        <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center">
          <Reject />
        </div>
        <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
          <SuperLike />
        </div>
        <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center">
          <Like />
        </div>
      </div>
    </div>
  );
}
