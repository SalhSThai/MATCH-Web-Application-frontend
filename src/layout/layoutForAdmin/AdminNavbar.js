import { Link } from 'react-router-dom';
import {
  HomeIcon,
  InterestIcon,
  MessageIcon,
  SettingIcon
} from '../../asset/Icon/IconForAdminNavbar';

export default function AdminNavbar() {
  return (
    <div className='w-[5%] sticky top-0 h-full bg-match-dark ml-8 pt-8 gap-10 flex flex-col justify-start items-center'>
      <Link to='/' className='w-full'>
        <HomeIcon />
      </Link>
      <Link to='/message' className='w-full'>
        <MessageIcon />
      </Link>
      <Link to='/interest' className='w-full'>
        <InterestIcon />
      </Link>
      <Link to='/setting' className='w-full'>
        <SettingIcon />
      </Link>
    </div>
  );
}
