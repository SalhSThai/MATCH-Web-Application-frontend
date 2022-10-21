import React, { useState } from 'react';
import SwipeBar from '../components/SwipeComponents/SwipeBar';
import UserCardForSwipe from '../components/SwipeComponents/UserCardForSwipe';

export default function SwipePage() {
  const [isProfileShow, setIsProfileShow] = useState(false);

  const handleClickUserDetail = (e) => setIsProfileShow(true);
  const handleCloseUserDetail = (e) => setIsProfileShow(false);

  return (
    <div className='pt-20 max-h-full overflow-y-scroll scrollbar-hide'>
      <UserCardForSwipe
        handleClickUserDetail={handleClickUserDetail}
        handleCloseUserDetail={handleCloseUserDetail}
        isProfileShow={isProfileShow}
      />

      <SwipeBar />
    </div>
  );
}
