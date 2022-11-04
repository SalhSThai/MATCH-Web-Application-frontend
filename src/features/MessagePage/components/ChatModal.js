import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../../config/socket'
import { thunkAddMessage, thunkFetchMessage,reduxRecentChat, reduxRecentTrigle } from '../../../redux/Slice/FriendsSlice'
import ChatModalBody from './ChatModal/ChatModalBody'
import ChatModalHeader from './ChatModal/ChatModalHeader'
import ChatModalSendBox from './ChatModal/ChatModalSendBox'
import dateFormat from 'dateformat';


export default function ChatModal(props) {
    const { status = false, setStatus, friendsInfo } = props
    const myInfo = useSelector(state => state?.auth?.userInfo)
    const [open, setOpen] = useState(false)
    const springStyle = useSpring({ y: status ? 0 : 700 })
    const [{ y }, api] = useSpring(() => ({ y: 0 }))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunkFetchMessage(friendsInfo?.roomId, friendsInfo?.id))
    }, [])
console.log('chatModal');
    const sendMessageFn = (message) => {
        const time = dateFormat(new Date(), 'H:MM TT')
        const MessageObj = {
            senderId: myInfo?.id,
            to: friendsInfo?.id,
            message,
            time
        }
        
        socket.emit('sendMessage', MessageObj)

        dispatch(reduxRecentTrigle({shake:true,color:true}))
        dispatch(reduxRecentChat(MessageObj))
        dispatch(thunkAddMessage(message, myInfo?.id, friendsInfo?.roomId, time))

    }

    const bind = useDrag(({ active, movement: [mx, my], velocity: [vx, vy] }) => {
        if (my > 200) {
            api.stop()
            api.start({
                to: async (next, cancel) => {
                    await next({ y: 700 })
                    setStatus(false);
                },
            })
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) {
                document.selection.empty();
            }
        }
        else {
            api.start({ y: active ? my : 0 });
        }
    }
        , { bounds: { top: 0 }, rubberband: true })


    return (
        <animated.div className="absolute w-full h-full z-[12]    " style={springStyle} >
            <animated.div className='relative w-full h-full flex flex-col fadeup' style={{ y }} >
                <ChatModalHeader bind={bind} friendsInfo={friendsInfo} />
                <ChatModalBody friendsInfo={friendsInfo}  />
            </animated.div>
            <ChatModalSendBox sendMessageFn={sendMessageFn} />
        </animated.div>
    )
}
