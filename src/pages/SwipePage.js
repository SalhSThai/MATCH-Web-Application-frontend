import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserCardForSwipe from '../components/SwipeComponents/UserCardForSwipe';
import { thunkUpdateLocation } from '../redux/Slice/LocationSlice';

export default function SwipePage() {




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
    <div className='relative h-full w-full  '>
      <div className='absolute top-[50%] -translate-y-[50%] w-full  aspect-[9/16] overflow-hidden' >
        <UserCardForSwipe />
      </div>
    </div>
  );
}
