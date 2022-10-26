import React from 'react';
import { Back } from '../../asset/iconForSwipePage/IconOnProfile';
import InterestBody from './interestBody';

export default function InterestContainer() {
  return (
    <>
      <div className="flex w-full py-3 px-4 gap-3">
        <button type="button">
          <Back />
        </button>
        <div className="font-bold text-2xl">SELECT YOUR INTEREST</div>
      </div>
      <div className="font-medium text-lg px-3">
        Select your interests to match with users who have similar things in
        common.
      </div>
      <InterestBody />
    </>
  );
}
