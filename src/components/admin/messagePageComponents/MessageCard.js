import { Avatar } from 'flowbite-react';

export default function MessageCard() {
  return (
    // change bg when card is active to bg-[#565D96]
    <div className='py-4 px-7 flex justify-between items-center'>
      <Avatar rounded='true' />
      <div className='flex w-full justify-between'>
        <div className='pl-5'>
          <div className='text-white font-semibold'>firstName lastName</div>
          <div className='text-white opacity-50'>message..</div>
        </div>
        <div className='text-white opacity-50'>4:18 PM</div>
      </div>
    </div>
  );
}
