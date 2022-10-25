import React, { useRef } from 'react'
import MatchCard from './components/MatchChatRoom'
import styled from 'styled-components';
import useMeasure from 'react-use-measure'
import { padStart } from 'lodash';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function SlidingMatch() {
    const [ref, bounds] = useMeasure()
    const [ref2, bounds2] = useMeasure()
    const MatchCard = styled.div`
    position:absolute ;
    background-color: ${props => `#${padStart((props.index * 11111).toString(16), 6, 0)}`};
    height: 100%;
    width: 120px;
    left: ${({ index }) => `${(index * bounds.width) + (index * 10)}px`};    
    `;


    const fn = (x, mx = 0, active) => () => {
        return {
            x: active ? mx : x,
            // y: down ? my : my,
            immediate: active
        }
    }
    function SlideMatchCard(props) {
        const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

        // Set the drag hook and define component movement based on gesture data
        const bind = useDrag(({ active, movement, offset: [ox, oy], velocity, moving, cancel }) => {
            // console.log(movement[0], 'sx', movement[1], 'sy');


            api.start({
                x: active ? movement[0] :
                    movement[0] >= 0 ? 0 : movement[0],
                config: { duration: 1000 }
            })
        }
            , { bounds: { left: (bounds.width * -(props.children.length - 3)), right: 100 }, rubberband: true }
        )

        // {



        // //     if(movement[0]>=0){api.start({
        // //             x: active ? movement[0] : 0,
        // //             // y: down ? my : my,
        // //             // immediate: active
        // //         })
        // //     }
        // //     else{api.start({
        // //         x: active ? movement[0] : movement[0],
        // //         // y: down ? my : my,
        // //         // immediate: active
        // //     })
        // // }
        // return api.start({x: active ? movement[0] : movement[0],}),{ bounds: { left: -100, right: 100, top: -50, bottom: 50 }}
        //         // if(!active) positionX.current = mx

        // })

        // console.log(bind());
        // Bind it to a component
        return <animated.div className="relative w-full h-full " {...bind()} style={{ x, y }} >{props.children}</animated.div>
    }
    function ChainExample() {
        const styles = useSpring({
            loop: true,
            to: [
                { opacity: 1, color: '#ffaaee' },
                { opacity: 0, color: 'rgb(14,26,19)' },
            ],
            from: { opacity: 0, color: 'red' },
        })
        // ...
        return <animated.div style={styles}>I will fade in and out</animated.div>
    }
    return (
        <div ref={ref2} className='w-full h-[200px] rounded-b-3xl absolute top-0 bg-gradient-to-b from-[#f24823] to-[#f46b26] shadow-lg'>
            <div className='w-full h-[150px]  absolute top-0 overflow-hidden px-2 pt-2'>
                <SlideMatchCard >
                    <MatchCard ref={ref} index={0} />
                    <MatchCard index={1} />
                    <MatchCard index={2} />
                    <MatchCard index={3} />
                </SlideMatchCard>
            </div>
        </div>
    )
}
