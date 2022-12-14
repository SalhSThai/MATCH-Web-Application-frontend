import React from 'react';

export default function LocationIcon({ fill, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 23 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.9195 27.3C15.9922 23.7891 23 15.2797 23 10.5C23 4.70312 17.849 0 11.5 0C5.15104 0 0 4.70312 0 10.5C0 15.2797 7.00781 23.7891 10.0805 27.3C10.8172 28.1367 12.1828 28.1367 12.9195 27.3ZM11.5 14C9.38568 14 7.66667 12.4305 7.66667 10.5C7.66667 8.56953 9.38568 7 11.5 7C13.6143 7 15.3333 8.56953 15.3333 10.5C15.3333 12.4305 13.6143 14 11.5 14Z'
        fill={fill}
      />
    </svg>
  );
}
