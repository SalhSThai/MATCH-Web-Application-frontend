import React from 'react';
import { Back } from '../../asset/iconForSwipePage.js/IconOnProfile';

export default function InterestContainer() {
  return (
    <>
      <div className="flex w-full py-3 px-4 gap-3">
        <Back></Back>
        <div className="font-bold text-2xl">SELECT YOUR INTEREST</div>
      </div>
      <div className="font-medium text-lg px-3">
        Select your interests to match with users who have similar things in
        common.
      </div>
      <div className=" w-full h-full text-black ">
        <div className="w-full gap-1.5 h-[40px] text-center flex flex-wrap mt-10">
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e] ">
              Advanter
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Gamer
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Eating
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Camping
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Jogging
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              E-sport
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Movie
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Shopping
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Cycling
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Fitness
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Fliming
            </div>
          </button>
          <button type="button">
            <div className="border-4 rounded-xl bg-white py-2 px-2 font-semibold text-gray-400 active:text-[#ed663e] active:border-[#ed663e]">
              Photo
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
