import { Avatar } from 'flowbite-react';
import LocationIcon from '../asset/IconForNearme/LocationIcon';

export default function NearMePage() {
  return (
    <div className='w-full h-full bg-match-dark relative'>
      <div className='flex flex-col justify-center h-20 mt-10 mx-5 px-5 bg-white rounded-xl gap-2'>
        <div className='flex gap-1'>
          <LocationIcon />
          <div className='font-semibold text-lg'>People near me</div>
        </div>
        <div className='text-sm px-3'>Within 10 kms.</div>
      </div>
      <div className='rounded-full bg-[#f18564] w-80 h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f09a80] w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f1bdad] w-52 h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='rounded-full bg-[#f3dad3] w-36 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-match-dark rounded-full'>
        <Avatar rounded='true' size='lg' />
      </div>
      <div className='absolute top-1/3 left-1/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
      <div className='absolute  top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
      <div className='absolute top-2/3 left-1/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
      <div className='absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
      <div className='absolute top-1/2 left-3/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
      <div className='absolute top-1/2 right-3/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' />
      </div>
    </div>
  );
}
