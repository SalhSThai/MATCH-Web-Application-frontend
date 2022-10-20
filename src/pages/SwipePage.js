import React, { useState } from 'react';
import iu from '../asset/profileUser/iu.png';
import SwipeBar from '../components/SwipeComponents/SwipeBar';
import UserDescriptionContainer from '../components/SwipeComponents/UserDescriptionContainer';

export default function SwipePage() {
  const [isProfileShow, setIsProfileShow] = useState(false);

  const handleClickUserDetail = (e) => setIsProfileShow(true);
  const handleCloseUserDetail = (e) => setIsProfileShow(false);

  return (
    <div className='pt-20 max-h-full overflow-y-scroll scrollbar-hide'>
      <div className='rounded-3xl relative'>
        <UserDescriptionContainer
          handleClickUserDetail={handleClickUserDetail}
          handleCloseUserDetail={handleCloseUserDetail}
          isProfileShow={isProfileShow}
        />
        <img className='rounded-2xl' src={iu} alt='user card' />
      </div>
      <SwipeBar />
    </div>
  );
}
