import BackgroundCircle from '../components/nearMeComponents/BackgroundCircle';
import ContentBox from '../components/nearMeComponents/ContentBox';
import FriendAvatar from '../components/nearMeComponents/FriendAvatar';
import MyAvatar from '../components/nearMeComponents/MyAvatar';

export default function NearMePage() {
  return (
    <div className='w-full h-full bg-match-dark relative'>
      <ContentBox />
      <BackgroundCircle />
      <MyAvatar />
      <FriendAvatar />
    </div>
  );
}
