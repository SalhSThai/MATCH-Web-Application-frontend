import React from 'react';
import { Back } from '../../asset/iconForSwipePage.js/IconOnProfile';
import UserModal from '../../reuseComponent/UserModal';
import iu from '../../asset/profileUser/iu.png';
export default function UserDetailModal({
  isProfileShow,
  handleCloseUserDetail
}) {
  return (
    <UserModal show={isProfileShow}>
      <div className=" h-full w-full">
       <div className="bg-[url('/src/asset/profileUser/iu.png')] bg-cover w-full h-4/6 p-5" onDrag=''>
          <Back onClick={handleCloseUserDetail} />
        </div>
      </div>
    </UserModal>
  );
}
