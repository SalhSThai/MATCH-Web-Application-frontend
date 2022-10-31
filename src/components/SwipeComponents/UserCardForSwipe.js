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


export default function UserCardForSwipe(props) {
  const [ref, measure] = useMeasure()
  const dispatch = useDispatch()
  const friends = useSelector(state => state.locations.friendNearMeFirst);
  const [arrFriends, setArrFriends] = useState([]);
  const [loading, setLoading] = useState(true)
  const [match,setMatch] = useState(false);
  const [nope,setNope] = useState(false);
  const [swipeRight,setSwipeRight] = useState(null)
  useEffect(() => {
    dispatch(thunkFetchFriendsNearMeFirst((p) => setLoading(p)))
    return () => {
    }
  }, [])
  useEffect(() => {
    setArrFriends(p => lodash.shuffle(friends))
  }, [friends])

  const handleSwipe= (swipe,type,info)=>{
    if(type==='btn'){
      setSwipeRight(swipe);
    }
    console.log(info,swipe);
    dispatch(thunkSwipe(info?.id,swipe))

  }


  return (
    <div className='relative w-full h-full'>
      {loading ? <MyLoading /> : null}
      <div ref={ref} className=' w-full h-full  '>
        {arrFriends ? arrFriends?.map?.((i, d) => <CardComponent key={i.id} index={d} measure={measure} length={arrFriends.length} info={i} handleSwipe={handleSwipe} swipeRight={swipeRight}  setSwipeRight={setSwipeRight}/>) : null}
        <SwipeBar handleSwipe={handleSwipe}/>
      </div>


    </div>
  );
}