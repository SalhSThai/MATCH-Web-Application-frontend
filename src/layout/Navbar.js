import React from 'react';
import {
  Chat,
  Home,
  Passion,
  UserProfiles,
  WhosLikeMe
} from '../asset/logo/Navbar';

export default function Navbar() {
  return (
      <div className='flex justify-around w-full h-10 items-center'>
        <Home />
        <Passion />
        <WhosLikeMe />
        <Chat />
        <UserProfiles />
      </div>
  );
}
