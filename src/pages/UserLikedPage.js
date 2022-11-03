import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCardMeliked from '../features/MeLike/UserCardMeliked';
import { thunkFetchAllMySwipe } from '../redux/Slice/SwipeSlice';

export default function UserLikedPage() {
  const Meliked = useSelector((state) => state.swipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkFetchAllMySwipe());
  }, []);

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-3 p-3 max-h-full overflow-y-scroll scrollbar-hide">
      {Meliked.whoILike?.map?.((items, index) => {
        return <UserCardMeliked key={index} items={items} />;
      })}
    </div>
  );
}
