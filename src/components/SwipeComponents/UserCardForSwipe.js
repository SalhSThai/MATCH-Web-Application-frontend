import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { thunkFetchFriendsNearMeFirst } from '../../redux/Slice/LocationSlice';
import lodash from 'lodash'
import useMeasure from 'react-use-measure'
import CardComponent from './CardComponent';
import SwipeBar from './SwipeBar';
import { useSpring, animated } from '@react-spring/web';
import MyLoading from '../MyLoading';
import { reduxCount, thunkSwipe } from '../../redux/Slice/FriendsSlice';
import socket from '../../config/socket'
import UserDescription from './UserDescription';
import ButtonForUserDetail from './ButtonForUserDetail';

export default function UserCardForSwipe(props) {
  const [ref, measure] = useMeasure()
  const dispatch = useDispatch()
  const friends = useSelector(state => state.locations.friendNearMeFirst);
  const state = useSelector(state => state);
  const myId = state?.auth?.userInfo?.id ?? 1;
  const [arrFriends, setArrFriends] = useState([]);
  const [loading, setLoading] = useState(true)
  const [match, setMatch] = useState(false);
  const [nope, setNope] = useState(false);
  const [swipeRight, setSwipeRight] = useState(null)
  useEffect(() => {
    dispatch(thunkFetchFriendsNearMeFirst((p) => setLoading(p)))
    return () => {
    }
  }, [])
  useEffect(() => {
    setArrFriends(p => lodash.shuffle(friends))
  }, [friends])

  const handleSwipe = (swipe, type, info) => {
    if (type === 'btn') {
      setSwipeRight(swipe);
    }
    console.log(info, swipe);
    if (swipe === '1') {
      socket.emit('swipeRight', { to: info?.id, from: myId })
      // dispatch(thunkSwipe(info?.id))
    }
  }

  return (
    <div ref={ref} className='relative w-full h-full px-4'>
      {loading ? <MyLoading /> : null}
      <div  className='relative w-full h-full '>
        {arrFriends ? arrFriends?.map?.((i, d) => <CardComponent key={i.id} index={d} measure={measure} length={arrFriends.length} info={i} handleSwipe={handleSwipe} swipeRight={swipeRight} setSwipeRight={setSwipeRight} />) : null}

        <SwipeBar handleSwipe={handleSwipe} />
      </div>


    </div>
  );
}