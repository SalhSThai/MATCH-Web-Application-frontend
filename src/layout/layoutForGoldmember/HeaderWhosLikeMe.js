import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='w-full flex justify-around p-2'>
      <Link to='/likeyou' type='button' className='font-bold'>
        46 Likes
      </Link>
      <Link to='/youlike' type='button' className='font-bold'>
        Liked
      </Link>
    </div>
  );
}
