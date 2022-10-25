import lisa from '../../../src/asset/profileUser/lisa.png';

export default function UserCard() {
  return (
    <div className='relative'>
      <div className='absolute bottom-0 p-3'>
        <div className='text-white font-bold'>Name, Age</div>
        <div className='text-white'>Status</div>
      </div>
      <img className='rounded-2xl' src={lisa} alt='user card' />
    </div>
  );
}
