import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reduxCount, reduxResetCount } from '../../redux/Slice/FriendsSlice'

export default function CardComponent(props) {
    const { measure,length,info } = props
    const [pic, setPic] = useState({})
    const [X, apiX] = useSpring(() => ({ x: 0 }))
    const [stateX, setStateX] = useState(false)
    const [matchX, setMatchX] = useState(0)
    const count = useSelector(state => state.friends.count)
    const friends = useSelector(state => state.locations.friendNearMeFirst);
    const dispatch = useDispatch()
    const Like = () => <div className={`absolute h-[80px] w-[150px] rounded-xl -rotate-45 left-0 top-[30px] flex justify-center items-center font-medium text-2xl border-green-400 border-[10px] text-green-400`}>LIKE</div>;
    const Nope = () => <div className={`absolute h-[80px] w-[150px] rounded-xl rotate-45 right-0 top-[30px] flex justify-center items-center font-medium text-2xl border-red-400 border-[10px] text-red-400`}>NOPE</div>;

    useEffect(() => {
        stateX && dispatch(reduxCount(1));
       if(stateX)setPic(p => { return { ...p, x: friends[Math.round(Math.random() * 19 + 1)]?.profileImage } });
    }, [stateX])
    useEffect(() => {
        if (count >= length) {
            dispatch(reduxResetCount(0));
            setStateX(p => false)
        }
    }, [count])
    const bindX = useDrag(async ({ swipe: [swipeX], movement: [mx], offset: [ox], velocity: [vx], down, last }) => {
        if (mx > 100) setMatchX(1);
        else if (mx < -100) setMatchX(-1);
        else setMatchX(0);
        if ((vx * swipeX > 1) || (mx > 100 && !down)) {
            apiX.stop()
            apiX.start({
                to: async animate => {
                    await animate({ to: { x: measure.width,rotateZ: 0 } });
                    setStateX(p => p = true)
                    setMatchX(p => p = 0);
                    await animate({ from: { x: measure.width }, to: { x: 0 } });
                }
            })
        }
        else if ((vx * swipeX < -1) || (mx < -100 && !down)) {
            apiX.stop()
            apiX.start({
                to: async animate => {
                    await animate({ to: { x: -measure.width,rotateZ: 0 } });
                    setStateX(p => p = true)
                    setMatchX(p => p = 0);
                    await animate({ from: { x: -measure.width }, to: { x: 0 } });

                }
            })
        }
        else {
            apiX.start({ x: down ? mx : 0 ,rotateZ: mx/9})
        }
    });

    return (
        <animated.div className={`absolute w-full h-full bg-center bg-cover rounded-xl ${stateX ? ' z-[1] ' : ' z-[2] '}`} {...bindX()} style={{ ...X, backgroundImage: `url(${info?.profileImage})` }}>
            <div className='relative w-full h-full'>
                {matchX === 1 ? <Like /> : null}
                {matchX === -1 ? <Nope /> : null}
            </div>
        </animated.div>
    )
}
