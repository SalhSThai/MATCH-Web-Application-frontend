import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChatIcon,
  HomeIcon,
  ExploreIcon,
  UserProfilesIcon,
  WhosLikeMeIcon
} from '../asset/logo/Navbar';

export default function Navbar() {

  const [state, setState] = useState('')
  let location = useLocation();
  useEffect(() => {
    setState(location.pathname)
    return () => setState('')
  }, [location])
  
  return (
    <div className='bg-white flex justify-around w-full h-[5vh] items-center fixed bottom-0 shadow-[0_-2px_4px_2px_rgba(0,0,0,0.1);] z-[11]'>
      <Link to='/'>
        <HomeIcon state={state}/>
      </Link>
      <Link to='/explore'>
        <ExploreIcon state={state} />
      </Link>
      <Link to='/likeyou'>
        <WhosLikeMeIcon state={state}/>
      </Link>
      <Link to='/message'>
        <ChatIcon state={state}/>
      </Link>
      <Link to='/post'>
        <UserProfilesIcon state={state}/>
      </Link>
    </div>
  );
}
