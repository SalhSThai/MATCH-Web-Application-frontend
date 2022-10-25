import React from 'react';
import Button from '../../../reuseComponent/Button';

export default function AlertMatchFooter() {
  return (
    <>
      <div className="flex flex-col items-center -bottom-12">
        <div className=" font-mali text-[#fe5e75] font-black text-5xl mb-6">
          It's a Match !!
        </div>
        <div className="font-extralight font-sans text-xl">
          Don't keep them waiting, say hello now
        </div>
      </div>

      <div className="w-[350px] absolute inset-x-10 bottom-32">
        <Button>Say Hi !!!!</Button>
        <button
          type="button"
          className="my-2 text-black items-center justify-center p-2 text-center font-medium focus:z-10 rounded-lg border-2 border-[#fd9a7c] w-[350px]"
        >
          Keep Swiping
        </button>
      </div>
    </>
  );
}
