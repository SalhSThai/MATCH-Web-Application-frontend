import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SwipeBar from '../components/SwipeComponents/SwipeBar';
import UserCardForSwipe from '../components/SwipeComponents/UserCardForSwipe';
import { thunkUpdateLocation } from '../redux/Slice/LocationSlice';

export default function SwipePage() {
  const [isProfileShow, setIsProfileShow] = useState(false);

  const handleClickUserDetail = (e) => setIsProfileShow(true);
  const handleCloseUserDetail = (e) => setIsProfileShow(false);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('latitude: ', latitude, 'longitude: ', longitude);
        dispatch(thunkUpdateLocation({ latitude, longitude }));
      },
      () => null
    );
  }, []);

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
