import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../features/LikeMe/UserCard';
import { thunkRemember } from '../redux/Slice/AuthSlice';
import { thunkFetchAllSwipedMe } from '../redux/Slice/SwipeSlice';
import Button from '../reuseComponent/Button';
import { getAccessToken } from '../utils/localStorage';

export default function WhosLikeMePage() {
  const state = useSelector((state) => state);
  const likedMe = useSelector((state) => state.swipe);
  const dispatch = useDispatch();

  useEffect(() => {
    getAccessToken() && dispatch(thunkRemember());
    dispatch(thunkFetchAllSwipedMe());
  }, []);

  if (state?.auth?.userInfo?.role === 'goldmember') {
    return (
      <div className="grid grid-cols-2 grid-flow-row gap-3 p-3 max-h-full overflow-y-scroll scrollbar-hide">
        {likedMe.wholikeme?.map?.((items, index) => {
          return <UserCard key={index} items={items} />;
        })}
      </div>
    );
  }

  if (state?.auth?.userInfo?.role === 'member') {
    return (
      <div className="bg-gradient-to-br from-match-ligth to-[#f3dad3] h-full w-full flex flex-col items-center">
        <div className="mt-16 mb-10 font-base text-xl">
          Please upgrade to Gold member
        </div>
        <div className="w-fit ">
          <Button>Upgrade</Button>
        </div>
      </div>
    );
  }
}
