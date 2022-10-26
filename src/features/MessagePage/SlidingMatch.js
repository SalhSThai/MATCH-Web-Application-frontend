import React, { useRef } from 'react'
import MatchCard from './components/MatchChatRoom'
import styled from 'styled-components';
import useMeasure from 'react-use-measure'
import { padStart } from 'lodash';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useDispatch, useSelector } from 'react-redux';
import MatchSlideCard from './components/MatchSlideCard';

export default function SlidingMatch() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();    
    const myId  = state?.auth?.userInfo?.id ?? 1;
    const allChatRooms = state?.friends?.allChatRooms
    const [ref, bounds] = useMeasure()
    const [ref2, bounds2] = useMeasure()
    
    const MatchCard = styled.div`
    position:absolute ;
    background-color: ${props => `#${padStart((props.index * 11111).toString(16), 6, 0)}`};
    height: 100%;
    width: 120px;
    left: ${({ index }) => `${(index * bounds.width) + (index * 10)}px`};    
    `;

    function SlideMatchCard(props) {
        const [{ x }, api] = useSpring(() => ({ x: 0 }))
        const bind = useDrag(({ offset: [ox, oy]}) => { api.start({ x: ox }) } , { bounds: { left:-(bounds2.left-bounds2.width), right: 0 }, rubberband: true } )
        return <animated.div ref={ref2} className="relative w-full h-full " {...bind()} style={{ x }} >{props.children}</animated.div>
    }

    return (
        <div  className='w-full h-[20%] rounded-b-3xl bg-gradient-to-b from-[#f24823] to-[#f46b26] shadow-[0_4px_4px_4px_rgba(0,0,0,0.2);] overflow-hidden z-[11]'>
            <div className='w-full h-full   overflow-hidden px-2 pt-2'>
                <SlideMatchCard >
                    <MatchSlideCard/>
                    <MatchCard ref={ref} index={0} />
                    <MatchCard index={1} />
                    <MatchCard index={2} />
                    <MatchCard index={3} />
                </SlideMatchCard>
            </div>
        </div>
    )
}
