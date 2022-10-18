import React from 'react';
import { Link } from 'react-router-dom';
import {
  Chat,
  Home,
  Passion,
  UserProfiles,
  WhosLikeMe
} from '../asset/logo/Navbar';

export default function Navbar() {
  return (
    <div className='bg-white flex justify-around w-full h-10 items-center fixed bottom-0'>
      <Link to='/'>
        <Home />
      </Link>
      <Link to='/'>
        <Passion />
      </Link>
      <Link to='/likeyou'>
        <WhosLikeMe />
      </Link>
      <Link to='/'>
        <Chat />
      </Link>
      <Link to='/userProfile'>
        <UserProfiles />
      </Link>
    </div>
  );
}
