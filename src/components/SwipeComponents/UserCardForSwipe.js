import { useSelector, useDispatch } from 'react-redux';
import UserDescriptionContainer from './UserDescriptionContainer';
import iu from '../../asset/profileUser/iu.png';
import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useEffect, useState } from 'react';
import { thunkFetchFriendsNearMeFirst } from '../../redux/Slice/LocationSlice';

export default function UserCardForSwipe(props) {
  const { } = props
  const state = useSelector(state => state);
  const friends = useSelector(state => state.locations.friendNearMeFirst);

  const dispatch = useDispatch()
  // const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // const trigger= {};
  // const bind = useDrag(({ down, movement: [mx], velocity: [vx],swipe: [swipeX]}) => {
  //   trigger.x = vx > 2?true:false;
  //   trigger.y = vx < -1?true:false;
  //   console.log('vx', swipeX)
  //   api.start({ x: down ? mx : 0, immediate: down });
  //   if(trigger.x){
  //     api.stop();
  //     api.start({ x:  -500 });
  //   }
  //   else if (trigger.y) {
  //     api.stop();
  //     api.start({ x:  500 });
  //   }
  // });
  const [matchX, setMatchX] = useState(0)
  const [matchY, setMatchY] = useState(0)
  const [stateX, setStateX] = useState(false)
  const [stateY, setStateY] = useState(false)


  const [positionY, setPositionY] = useState(0)

  const [positionX, setPositionX] = useState(0)
  const [ref, measure] = useMeasure()
  const [Y, apiY] = useSpring(() => ({ x: positionY * measure.width }))
  const [X, apiX] = useSpring(() => ({ x: positionX * measure.width }))
  const bindX = useDrag(async ({ swipe: [swipeX], movement: [mx], offset: [ox], velocity: [vx], down, last }) => {
    apiY.start({ x: 0 })

    if (mx > 100) {
      setMatchX(1)
    } else if (mx < -100) {
      setMatchX(-1)
    }
    else {
      setMatchX(null)
    }
    if ((vx * swipeX > 1) || (mx > 100 && !down)) {
      apiX.stop()
      apiX.start({
        to: async animate => {
          await animate({ to: { x: measure.width } });
          console.log('1111');
          setStateX(true)
          setStateY(false)
          setMatchX(null)


        }
      })




    }
    else if ((vx * swipeX < -1) || (mx < -100 && !down)) {
      apiX.stop()
      apiX.start({
        to: async animate => {
          await animate({ to: { x: measure.width } });
          console.log('1111');
          setStateX(true)
          setStateY(false)
          setMatchX(null)


        }
      })

      setStateX(true)
      setStateY(false)


    } else {

      apiX.start({
        to: async animate => {
          await animate({
            to: { x: down ? mx : 0 }
          })

        }



      })
    }


  })


  const bindY = useDrag(({ swipe: [swipeX], movement: [mx], offset: [ox], velocity: [vx], down }) => {
    apiX.start({ x: 0 })

    if (mx > 100) {
      setMatchY(1)
    } else if (mx < -100) {
      setMatchY(-1)
    }
    else {
      setMatchY(null)
    }
    if ((vx * swipeX > 1) || (mx > 100 && !down)) {
      apiY.stop()
      apiY.start({
        to: async animate => {
          await animate({ to: { x: measure.width } });
          console.log('1111');
          setStateY(true)
          setStateX(false)
          setMatchY(null)


        }
      })

    }
    else if ((vx * swipeX < -1) || (mx < -100 && !down)) {
      apiY.stop()
      apiY.start({
        to: async animate => {
          await animate({ to: { x: -measure.width } });
          console.log('1111');
          setStateY(true)
          setStateX(false)
          setMatchY(null)


        }
      })


    } else {

      apiY.start({ x: down ? mx : 0 })
    }

  })


  useEffect(() => {
    dispatch(thunkFetchFriendsNearMeFirst())

    return () => {
    }
  }, [])
  const friend = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const mockFriend = [friend[i],friend[i+1]]
  const [pic, setPic] = useState({})
  useEffect(() => {

    setPic(p => { return { ...p, 0: friends[Math.round(Math.random() * 19 + 1)]?.profileImage } })
    setPic(p => { return { ...p, 1: friends[Math.round(Math.random() * 19 + 1)]?.profileImage } })

  }, [friends])

  // console.log(bind());
  return (
    <div ref={ref} className='relative w-full h-full '>
      <animated.div className={`absolute w-full h-full bg-center bg-cover ${stateY ? ' z-[4] ' : ' z-[5] '}`} {...bindY()} style={{ ...Y, backgroundImage: `url(${pic[0]})` }}><div className='relative w-full h-full'>
        <div className='absolute'>Y</div>

        {matchY === 1 ? <div className={`absolute h-[80px] w-[150px] rounded-full -rotate-45 left-0 top-[30px] flex justify-center items-center font-medium text-2xl  bg-green-600 border-green-400 border-[10px] text-green-400`}>MATCH</div> : null}
        {matchY === -1 ? <div className={`absolute h-[80px] w-[150px] rounded-full rotate-45 right-0 top-[30px] flex justify-center items-center font-medium text-2xl border-red-400 border-[10px] text-red-400`}>NOPE</div> : null}
      </div></animated.div>

      <animated.div className={`absolute w-full h-full bg-center bg-cover ${stateX ? ' z-[4] ' : ' z-[5] '}`} {...bindX()} style={{ ...X, backgroundImage: `url(${pic[1]})` }}><div className='relative w-full h-full'>
        <div className='absolute'>X</div>
        {matchX === 1 ? <div className={`absolute h-[80px] w-[150px] rounded-full -rotate-45 left-0 top-[30px] flex justify-center items-center font-medium text-2xl  bg-green-600 border-green-400 border-[10px] text-green-400`}>MATCH</div> : null}
        {matchX === -1 ? <div className={`absolute h-[80px] w-[150px] rounded-full rotate-45 right-0 top-[30px] flex justify-center items-center font-medium text-2xl border-red-400 border-[10px] text-red-400`}>NOPE</div> : null}
      </div></animated.div>





      {/* <animated.div className={`absolute bg-red-500 w-full h-full bg-center bg-cover`} {...bindX()} style={{...X,backgroundImage: `url(${pic[1]})`}}></animated.div> */}

      {/* <UserDescriptionContainer /> */}
      {/* <animated.div className='rounded-3xl relative cursor-grab w-full  aspect-[9/16]' {...bind()} style={{ x }} >
        <img className='rounded-2xl ' src={iu} alt='user card' draggable='false' />
      </animated.div> */}
    </div>
  );
}
