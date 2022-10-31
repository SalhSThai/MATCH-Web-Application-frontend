import Archery from '../../../asset/interest/Archery.jpg';

export default function InterestCard() {
  return (
    <div className='w-48 h-60 bg-[#29437E] rounded-xl flex flex-col justify-between'>
      <div className='w-full h-full object-contain'>
        <img
          src={Archery}
          alt='Interest picture'
          className='rounded-t-xl h-full'
        />
      </div>
      <div className='px-4 py-3 flex justify-between items-center'>
        <div className='text-white font-semibold'>Archery</div>
        <div className='text-white'>🏹</div>
      </div>
    </div>
  );
}
