import React from 'react';
import { Back } from '../../asset/iconForSwipePage/IconOnProfile';
import Button from '../../reuseComponent/Button';
import AddPhotoCard from './AddPhotoCard';

export default function AddUserPhotoContainer() {
  return (
    <>
      <div className="flex w-full py-3 px-4 gap-3">
        <Back></Back>
        <div className="font-bold text-2xl">Add Your Best Photos</div>
      </div>
      <div className="font-medium text-lg px-3">
        Add your best photos to get a higher amount of daily matches.
      </div>

      <div className="grid grid-cols-2 grid-flow-row gap-2.5 p-3 mt-4 max-h-full overflow-y-scroll scrollbar-hide">
        <AddPhotoCard />
        <AddPhotoCard />
        <AddPhotoCard />
        <AddPhotoCard />
        <AddPhotoCard />
        <AddPhotoCard />
      </div>
      <Button className="w-full ">Next</Button>
    </>
  );
}
