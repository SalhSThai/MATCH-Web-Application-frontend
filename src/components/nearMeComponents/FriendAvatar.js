import { Avatar } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchFriendsNearMe } from '../../redux/Slice/LocationSlice';

export default function FriendAvatar() {
  const friendNearMe = useSelector((state) => state.locations.friendNearMe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchFriendsNearMe());
  }, []);

  return (
    <>
      <div className='absolute top-1/3 left-1/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[0]?.User?.profileImage} />
      </div>
      <div className='absolute  top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[1]?.User?.profileImage} />
      </div>
      <div className='absolute top-2/3 left-1/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[2]?.User?.profileImage} />
      </div>
      <div className='absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[3]?.User?.profileImage} />
      </div>
      <div className='absolute top-1/2 left-3/4 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[4]?.User?.profileImage} />
      </div>
      <div className='absolute top-1/2 right-3/4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
        <Avatar rounded='true' img={friendNearMe?.[5]?.User?.profileImage} />
      </div>
    </>
  );
}
