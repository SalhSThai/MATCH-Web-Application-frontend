import React, { useState } from 'react';
import SwipeBar from '../components/SwipeComponents/SwipeBar';
import UserCardForSwipe from '../components/SwipeComponents/UserCardForSwipe';

export default function SwipePage() {

  return (
    <div className='relative h-full w-full  '>
      <div className='absolute top-[50%] -translate-y-[50%] w-full  aspect-[9/16] ' >
        <UserCardForSwipe />

        {/* <SwipeBar /> */}
      </div>
    </div>
  );
}
