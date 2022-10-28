import React from 'react';

function PhoneIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-phone text-[#fe5e75]'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='#fe5e75'
      strokeLinecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-video text-[#fe5e75]'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='#fe5e75'
      strokeLinecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z'></path>
      <rect x='3' y='6' width='12' height='12' rx='2'></rect>
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-list text-[#fe5e75]'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='#fe5e75'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <line x1='9' y1='6' x2='20' y2='6'></line>
      <line x1='9' y1='12' x2='20' y2='12'></line>
      <line x1='9' y1='18' x2='20' y2='18'></line>
      <line x1='5' y1='6' x2='5' y2='6.01'></line>
      <line x1='5' y1='12' x2='5' y2='12.01'></line>
      <line x1='5' y1='18' x2='5' y2='18.01'></line>
    </svg>
  );
}
export { PhoneIcon, VideoIcon, ListIcon };
