import React, { useRef, useState } from 'react';

export default function AddPhotoCard() {
  const inputEl = useRef();
  const [fileInput, setFileInput] = useState(null);
  return (
    <div className="relative flex">
      <div
        className="border-4 border-dashed border-[#f5825f] bg-[#f3ded8] rounded-2xl w-[250px] h-[250px] cursor-pointer"
        onClick={() => inputEl.current.click()}
      >
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
