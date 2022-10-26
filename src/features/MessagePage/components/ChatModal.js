import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React, { useEffect, useState } from 'react'
import ChatModalBody from './ChatModal/ChatModalBody'
import ChatModalHeader from './ChatModal/ChatModalHeader'
import ChatModalSendBox from './ChatModal/ChatModalSendBox'


export default function ChatModal(props) {
    const {status =false,setStatus} = props
    const [open, setOpen] = useState(false)
    const springStyle = useSpring({ y: status ? 0 : 700  })
    const [{ y }, api] = useSpring(() => ({ y: 0 }))
    const bind = useDrag(({ active, offset: [ox, oy], movement: [mx, my], velocity: [vx, vy] }) => { 

        
        if(my>200){
            api.stop()
            api.start({  to: async (next, cancel) => { 
                await next({y:700})
                setStatus(false);
            }, })
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) {
                document.selection.empty();
            }
        }
        else{
        api.start({ y: active ? my : 0 }); }}
        , { bounds: { top: 0 } , rubberband: true })
  

    return (
        <animated.div  className="absolute w-full h-full z-[10] " style={{ y }}>
            <animated.div className='relative w-full h-full flex flex-col fadeup'  style={springStyle}>
                {/* <animated.div className='w-[100px] h-[100px] bg-yellow-400'  ></animated.div> */}
                <ChatModalHeader bind={bind} />
                <ChatModalBody />
                <ChatModalSendBox />
            </animated.div>
        </animated.div>
    )
}
