import { Back } from '../asset/iconForSwipePage.js/IconOnProfile';
import LogoutButton from '../components/LogoutButton';
import UserInfo from '../features/UserProfile/UserInfo';

export default function UserProfilePage() {
  return (
    <>
      <div className='flex gap-3 w-full '>
        <Back />
        <h1 className='items-center'>Fill Your Profile</h1>
      </div>
      <div className='w-full px-10 max-h-full overflow-y-scroll scrollbar-hide'>
        <UserInfo />
        <LogoutButton />
      </div>
    </>
  );
}
