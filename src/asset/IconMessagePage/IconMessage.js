import React from 'react';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-search text-white"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="10" cy="10" r="7"></circle>
      <line x1="21" y1="21" x2="15" y2="15"></line>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-map-pin text-white"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="11" r="3"></circle>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
    </svg>
  );
}

export { SearchIcon, MapIcon };
