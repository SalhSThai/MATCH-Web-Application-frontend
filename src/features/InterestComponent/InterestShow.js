import React, { useState } from 'react';

function InterestShow({ title, icon }) {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <div>
      <input
        id={title}
        className="check hidden"
        type="checkbox"
        onClick={(e) => setCheckBox(e.target.checked)}
      />
      <div
        className={`w-full h-full flex border-4 rounded-xl bg-white py-2 px-2 font-semibold justify-center items-center cursor-default select-none ${
          checkBox
            ? ' border-[#ed663e] bg-[#ed663e] text-white'
            : 'text-gray-400 '
        }`}
      >
        <label htmlFor={title}>
          <div className="flex items-center gap-3">
            <div className="w-[30px]">
              <img src={icon} alt="icon" />
            </div>
            {title}
          </div>
        </label>
      </div>
    </div>
  );
}

export default InterestShow;
