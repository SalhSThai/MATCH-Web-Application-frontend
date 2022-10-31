import { Avatar } from 'flowbite-react';
import { useSelector } from 'react-redux';
import logo from '../../asset/logo/match3.png';

export default function AdminHeader() {
  const user = useSelector(({ auth: { userInfo } }) => userInfo);

  return (
    <div className='flex justify-between px-10 py-5'>
      <div className='flex flex-col items-center'>
        <img className='h-20 w-auto' src={logo} alt='logo'></img>
        <div className='text-match-dark text-xl'>admin parnel</div>
      </div>
      <div className='flex items-center gap-5'>
        <div>
          <div className='text-white text-2xl'>{user.firstName} </div>
          <div className='text-white text-2xl'>{user.lastName} </div>
        </div>
        <Avatar
          rounded='true'
          size='lg'
          img={user.profileImage ? user.profileImage : ''}
        />
      </div>
    </div>
  );
}
