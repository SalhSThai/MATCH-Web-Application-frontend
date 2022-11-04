import React, { useEffect, useRef } from 'react'
import MatchCard from './components/MatchChatRoom'
import styled from 'styled-components';
import useMeasure from 'react-use-measure'
import { padStart } from 'lodash';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateRoom, thunkFetchMatch } from '../../redux/Slice/FriendsSlice';
import SlidingCard from './components/SlidingCard';

export default function SlidingMatch() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const myId = state?.auth?.userInfo?.id ?? 1;
    const allChatRooms = state?.friends?.allChatRooms
    const [ref, bounds] = useMeasure()
    const [ref2, bounds2] = useMeasure()


    const [style, api] = useSpring(() => ({ x: 0 }))
    const bind = useDrag(({ offset: [ox, oy] }) => {
        api.start({ x: ox })
    },
        {
            bounds: { left: -(bounds.width - 120), right: 0 },
            rubberband: true
        }
    )



    const friendsArr = state.friends?.myMatchFriends
    useEffect(() => {
        dispatch(thunkFetchMatch())
        return () => {

        }
    }, [])

    useEffect(() => { console.log(friendsArr); }, [friendsArr])

    const handleCreateRoom = ({ matchId, matchFriends }) => {
        const frinedsIdArr = friendsArr.map(i=>i.matchFriends.id)
        const check = frinedsIdArr.includes(matchFriends.id)
        if(!check){dispatch(thunkCreateRoom({userId:myId,matchFriendsId:matchFriends.id}))}
    }

    return (
        <div className='w-full h-[20%] rounded-b-3xl bg-gradient-to-b px-2 pt-2 from-[#f24823] to-[#f46b26] shadow-[0_4px_4px_4px_rgba(0,0,0,0.2);] overflow-hidden z-[11]'>
            <animated.div ref={ref} className='flex gap-2 h-full min-w-full w-fit' style={{ ...style }} {...bind()}>
                {friendsArr?.map?.((i, d) => <SlidingCard key={d} info={i} createRoom={handleCreateRoom} />)}

            </animated.div>
        </div>
    )
}
