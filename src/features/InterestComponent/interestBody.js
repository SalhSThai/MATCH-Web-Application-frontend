import React from 'react';
import styled from 'styled-components';
function InterestBody() {
  const interestCheck = styled.input``;
  return (
    <div className=" w-full h-full text-black ">
      <div className="w-full gap-1.5 h-[40px] text-center flex flex-wrap mt-10">
        <interestCheck
          type="checkbox"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e] "
        >
          Advanter
        </interestCheck>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Gamer
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Eating
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Camping
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Jogging
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          E-sport
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Movie
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Shopping
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Cycling
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Fitness
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Fliming
        </button>
        <button
          type="button"
          className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]"
        >
          Photo
        </button>
      </div>
    </div>
  );
}

export default InterestBody;
