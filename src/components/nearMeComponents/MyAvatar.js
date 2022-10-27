import { Avatar } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function MyAvatar() {
  const user = useSelector(({ auth: { userInfo } }) => userInfo);

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-match-dark rounded-full'>
      <Avatar
        rounded='true'
        size='lg'
        img={user.profileImage ? user.profileImage : ''}
      />
    </div>
  );
}
