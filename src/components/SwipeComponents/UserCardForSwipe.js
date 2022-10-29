import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { thunkFetchFriendsNearMeFirst } from '../../redux/Slice/LocationSlice';
import lodash from 'lodash'
import useMeasure from 'react-use-measure'
import CardComponent from './CardComponent';
import SwipeBar from './SwipeBar';
import { useSpring, animated } from '@react-spring/web';
import MyLoading from '../MyLoading';


export default function UserCardForSwipe(props) {
  const [ref, measure] = useMeasure()
  const dispatch = useDispatch()
  const friends = useSelector(state => state.locations.friendNearMeFirst);
  const [arrFriends, setArrFriends] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    dispatch(thunkFetchFriendsNearMeFirst((p) => setLoading(p)))
    return () => {
    }
  }, [])




  useEffect(() => {
    setArrFriends(p => lodash.shuffle(friends))
  }, [friends])


  return (
    <div className='relative w-full h-full'>
      {loading ? <MyLoading /> :
        <div ref={ref} className=' w-full h-full  '>
          {arrFriends ? arrFriends?.map?.((i, d) => <CardComponent key={i.id} measure={measure} length={arrFriends.length} info={i} />) : null}
          <SwipeBar />
        </div>
      }

    </div>
  );
}