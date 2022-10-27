import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChatIcon,
  HomeIcon,
  ExploreIcon,
  UserProfilesIcon,
  WhosLikeMeIcon
} from '../asset/logo/Navbar';

export default function Navbar() {
  return (
    <div className='bg-white flex justify-around w-full h-[5vh] items-center fixed bottom-0 shadow-[0_-2px_4px_2px_rgba(0,0,0,0.1);] z-[11]'>
      <Link to='/'>
        <HomeIcon />
      </Link>
      <Link to='/explore'>
        <ExploreIcon />
      </Link>
      <Link to='/likeyou'>
        <WhosLikeMeIcon />
      </Link>
      <Link to='/message'>
        <ChatIcon />
      </Link>
      <Link to='/post'>
        <UserProfilesIcon />
      </Link>
    </div>
  );
}
