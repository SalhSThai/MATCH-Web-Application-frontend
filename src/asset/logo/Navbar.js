import React from 'react';

function HomeIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-home'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <polyline points='5 12 3 12 12 3 21 12 19 12'></polyline>
      <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
      <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6'></path>
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-list-search'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <circle cx='15' cy='15' r='4'></circle>
      <path d='M18.5 18.5l2.5 2.5'></path>
      <path d='M4 6h16'></path>
      <path d='M4 12h4'></path>
      <path d='M4 18h4'></path>
    </svg>
  );
}
function WhosLikeMeIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hearts'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M14.017 18.001l-2.017 1.999l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.153 5.784'></path>
      <path d='M15.99 20l4.197 -4.223a2.81 2.81 0 0 0 .006 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.28 .282l-.279 -.283a2.747 2.747 0 0 0 -3.91 -.007a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238z'></path>
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-message-circle-2'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1'></path>
    </svg>
  );
}
function UserProfilesIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-user-circle'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <circle cx='12' cy='12' r='9'></circle>
      <circle cx='12' cy='10' r='3'></circle>
      <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855'></path>
    </svg>
  );
}
export { HomeIcon, ExploreIcon, WhosLikeMeIcon, ChatIcon, UserProfilesIcon };
