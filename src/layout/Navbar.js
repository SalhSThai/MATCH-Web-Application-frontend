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
    <div className='bg-white flex justify-around w-full h-10 items-center fixed bottom-0'>
      <Link to='/'>
        <HomeIcon />
      </Link>
      <Link to='/explore'>
        <ExploreIcon />
      </Link>
      <Link to='/likeyou'>
        <WhosLikeMeIcon />
      </Link>
      <Link to='/chatapp'>
        <ChatIcon />
      </Link>
      <Link to='/userProfile'>
        <UserProfilesIcon />
      </Link>
    </div>
  );
}
