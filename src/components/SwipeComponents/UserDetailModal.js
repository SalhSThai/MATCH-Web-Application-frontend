import { Carousel } from 'flowbite-react';
import React from 'react';
import { Back } from '../../asset/iconForSwipePage.js/IconOnProfile';
import UserModal from '../../reuseComponent/UserModal';
import iu2 from '../../asset/profileUser/iu2.jpg';
import iu1 from '../../asset/profileUser/iu1.jpg';
export default function UserDetailModal({
  isProfileShow,
  handleCloseUserDetail
}) {
  return (
    <UserModal show={isProfileShow}>
      <div className=" w-full realative bg-slate-400">
        <div className="fixed z-[1] cursor-pointer p-5">
          <Back onClick={handleCloseUserDetail} />
        </div>
        <div className="h-[550px]">
          <Carousel slide={false}>
            <img src={iu2} alt="..." />
            <img src={iu1} alt="..." />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col p-7 gap-3 rounded-t-3xl -translate-y-5 bg-white">
        <div className='text-3xl font-semibold'>Name,AGE</div>
        <div className='text-xl'>Ocupation</div>
        <div className='text-2xl font-semibold'>About</div>
        <div className='text-xl'>Describe</div>
        <div className='text-2xl font-semibold'>Interest</div>
        <div>Interest Log</div>
      </div>
    </UserModal>
  );
}
