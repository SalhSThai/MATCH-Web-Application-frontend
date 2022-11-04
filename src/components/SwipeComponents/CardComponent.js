import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reduxCount, reduxResetCount, reduxSetCurrentSlice } from '../../redux/Slice/FriendsSlice'
import UserDescription from './UserDescription'

export default function CardComponent(props) {
    const { measure, length, info, handleSwipe, swipeRight, setSwipeRight, index } = props
    const [pic, setPic] = useState({})
    
    const [X, apiX] = useSpring(() => ({ x: 0 ,rotateZ: 0,opacity: 1}))

    const [stateX, setStateX] = useState(false)
    const [matchX, setMatchX] = useState(0)
    const count = useSelector(state => state.friends.count)
    const friends = useSelector(state => state.locations.friendNearMeFirst);
    const dispatch = useDispatch()
    const Like = () => <div className={`absolute h-[80px] w-[150px] rounded-xl -rotate-45 left-0 top-[30px] flex justify-center items-center font-medium text-2xl border-green-400 border-[10px] text-green-400`}>LIKE</div>;
    const Nope = () => <div className={`absolute h-[80px] w-[150px] rounded-xl rotate-45 right-0 top-[30px] flex justify-center items-center font-medium text-2xl border-red-400 border-[10px] text-red-400`}>NOPE</div>;
    useEffect(() => {

        if (stateX) setPic(p => { return { ...p, x: friends[Math.round(Math.random() * 19 + 1)]?.profileImage } });
    }, [stateX])
    useEffect(() => {
        if(  count === (index + 1)){
            dispatch(reduxSetCurrentSlice(info))
        }
        if (count <= 0) {
            dispatch(reduxResetCount(length));
            setStateX(p => false)
        }
    }, [count])
    useEffect(() => {

        if (swipeRight === '1' && (index + 1) === count) {
            dispatch(reduxCount(1));

            apiX.start({
                to: async animate => {
                    setMatchX(p => p = 1);
                    await animate({ from: { x: 0, rotateZ: 0 }, to: { x: measure.width, rotateZ: 30 }, config: { duration: 800 } });
                    setStateX(p => p = true);
                    setMatchX(p => p = 0);
                    await animate({ from: { x: measure.width,opacity: 0 }, to: { x: 0,rotateZ: 0  } });
                    await animate({  to: { opacity: 1} });

                }
            });
            setSwipeRight(false);
        }
        else if (swipeRight === '-1' && (index + 1) === count) {
            dispatch(reduxCount(1));

            apiX.start({
                to: async animate => {
                    setMatchX(p => p = -1);
                    await animate({ from: { x: 0, rotateZ: 0 }, to: { x: -measure.width, rotateZ: -30 }, config: { duration: 800 } });
                    setStateX(p => p = true);
                    setMatchX(p => p = 0);
                    await animate({ from: { x: measure.width,opacity: 0 }, to: { x: 0, rotateZ: 0 } });
                    await animate({  to: { opacity: 1} });

                }
            });
            setSwipeRight(false);
        }
        setSwipeRight(0)
    }, [swipeRight])
    const bindX = useDrag(async ({ swipe: [swipeX], movement: [mx], offset: [ox], velocity: [vx], down, last }) => {

        if (mx > 100) setMatchX(1);
        else if (mx < -100) setMatchX(-1);
        else setMatchX(0);
        if ((vx * swipeX > 1) || (mx > 100 && !down)) {
            apiX.stop()
            apiX.start({
                to: async animate => {
                    handleSwipe('1','swipe',info,matchX)

                    dispatch(reduxCount(1));
                    await animate({ to: { x: measure.width, rotateZ: 0 ,opacity: 0} });
                    setStateX(p => p = true)
                    setMatchX(p => p = 0);
                    await animate({ from: { x: measure.width,opacity: 0 }, to: { x: 0,opacity: 1 } });
                    await animate({  to: { opacity: 1} });

                }
            })

        }
        else if ((vx * swipeX < -1) || (mx < -100 && !down)) {

            apiX.stop()
            apiX.start({
                to: async animate => {
                    handleSwipe('-1','swipe',info)
                    dispatch(reduxCount(1));
                    await animate({ to: { x: -measure.width, rotateZ: 0,opacity: 1 } });
                    setStateX(p => p = true)
                    setMatchX(p => p = 0);
                    await animate({ from: { x: -measure.width,opacity: 0 }, to: { x: 0 ,opacity: 0} });
                    await animate({  to: { opacity: 1} });

                }
            })
        }
        else {

            apiX.start({ x: down ? mx : 0, rotateZ:down?(mx/9):0 })
        }
    });

    return (
        <animated.div className={`absolute w-full h-full bg-center bg-cover rounded-xl cursor-grab ${stateX ? ' z-[1] ' : ' z-[2] '}`} {...bindX()} style={{ ...X, backgroundImage: `url(${info?.profileImage})` }}>
            <div className='relative w-full h-full'>
                {matchX === 1 ? <Like /> : null}
                {matchX === -1 ? <Nope /> : null}
            </div>
        <UserDescription info={info}/>

        </animated.div>

    )
}
