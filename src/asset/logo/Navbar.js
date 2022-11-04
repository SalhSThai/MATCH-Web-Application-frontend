
function HomeIcon({state}) {

  return (
    <svg
    
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-home ${state==='/' ? ` shadowTest ` : null}`}
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

function ExploreIcon({state}) {
  return (
    <svg className={`${state ==='/explore' ? ` shadowTest ` : null}`} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_221_3050)">
        <path d="M5 5H12.5V12.5H5V5Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 5H25V12.5H17.5V5Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17.5H12.5V25H5V17.5Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 23.7995C24.6206 23.1305 25 22.2345 25 21.25C25 19.1789 23.3211 17.5 21.25 17.5C19.1789 17.5 17.5 19.1789 17.5 21.25C17.5 23.3211 19.1789 25 21.25 25C22.3365 25 23.3151 24.5379 24 23.7995ZM24 23.7995C27 26 27 26 27 26" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_221_3050">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
}
function WhosLikeMeIcon({state}) {
  return (
    <svg
    className={`${state  ==='/likeyou'? ` shadowTest ` : null}`}
      xmlns='http://www.w3.org/2000/svg'
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
function ChatIcon({state}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${state ==='/message' ? ` shadowTest ` : null}`}
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
function UserProfilesIcon({state}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${state  ==='/post'? ` shadowTest ` : null}`}
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
