import party from '../../../src/asset/interest/party.jpg';

export default function InterestCard() {
  return (
    <div className='relative flex h-56'>
      <div className='absolute bottom-0 p-3'>
        <div className='text-white font-bold'>Description</div>
        <div className='text-white'>Passion</div>
      </div>
      <div className='absolute p-3 right-1/4 bottom-1/4'>
        <div className=' text-white font-bold bg-orange-400 rounded-2xl py-1 px-2'>
          Hangout
        </div>
      </div>
      <img className='rounded-2xl' src={party} alt='user card' />
    </div>
  );
}
