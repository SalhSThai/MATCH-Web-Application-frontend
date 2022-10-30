import React from 'react';

export default function UserDescription(props) {
  const {username,occupation} = props
  return (
    <div>
      <div className='text-white'>{username?.toUpperCase()}</div>
      <div className='text-white'>{occupation}</div>
    </div>
  );
}
