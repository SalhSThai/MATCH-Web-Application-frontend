import React from 'react';

export default function LogoutButton() {
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        className='my-2 text-black hover:bg-gradient-to-br from-[#fd9a7c] to-[#ed663e] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800  items-center justify-center p-2 text-center font-medium focus:z-10 rounded-lg border-2 border-slate-300 hover'
      >
        Logout
      </button>
    </div>
  );
}
