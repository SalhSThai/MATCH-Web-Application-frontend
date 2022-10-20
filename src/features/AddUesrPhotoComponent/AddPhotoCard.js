import React, { useRef, useState } from 'react';
import { IconAddPhoto } from '../../asset/IconAddPhoto/IconAddPhoto';

export default function AddPhotoCard() {
  const inputEl = useRef();
  const [fileInput, setFileInput] = useState(null);
  return (
    <div className="relative flex">
      <div
        className="border-4 border-dashed border-[#fd7689] bg-[#ffeef0] rounded-2xl w-[250px] h-[250px] cursor-pointer"
        onClick={() => inputEl.current.click()}
      >
        <div className='w-full h-full flex justify-center align-middle items-center'>
          <div className=" rounded-3xl w-[40px] h-[40px] flex justify-center items-center bg-[#fd6f83]">
            <IconAddPhoto />
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFileInput(e.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
}
