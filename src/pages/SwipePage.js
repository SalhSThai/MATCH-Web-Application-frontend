import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserCardForSwipe from '../components/SwipeComponents/UserCardForSwipe';

export default function SwipePage() {




  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <div className='relative h-full w-full  '>
      <div className='absolute top-[50%] -translate-y-[50%] w-full  aspect-[9/16] overflow-hidden' >
        <UserCardForSwipe />
      </div>
    </div>
  );
}
