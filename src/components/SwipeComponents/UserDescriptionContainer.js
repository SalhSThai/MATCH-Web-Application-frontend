import React from 'react';
import UserDetailModal from './UserDetailModal';
import ButtonForUserDetail from './ButtonForUserDetail';
import UserDescription from './UserDescription';
import { useSelector } from 'react-redux';

export default function UserDescriptionContainer(props) {
const {handleClickUserDetail,  handleCloseUserDetail,  isProfileShow,info} = props

  const friends = useSelector(state => state.locations.friendNearMeFirst);


  return (
    <div className='relative w-full h-full'>
      {/* <img src='info?.profileImage'/> */}
      <div className=' bg-gray-600 w-full h-[130px] bg-opacity-30 absolute bottom-0 flex justify-between px-5 pt-5 rounded-3xl'>
        <UserDescription />
        <ButtonForUserDetail handleClickUserDetail={handleClickUserDetail} />
        <UserDetailModal
          isProfileShow={isProfileShow}
          handleCloseUserDetail={handleCloseUserDetail}
        />
      </div>
    </div>
  );
}
