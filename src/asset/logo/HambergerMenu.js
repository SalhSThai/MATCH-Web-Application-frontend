import React from 'react';

export default function HambergerMenu() {
  return (
    <div className="relative h-[50px] w-[50px] mx-5  ">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  );
}
