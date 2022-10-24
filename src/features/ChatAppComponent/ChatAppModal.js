import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../config/socket';
import HeaderChatRoom from './HeaderChatRoom';
import MessageBoxChatRoom from './MessageBoxChatRoom';
import SendBoxChatRoom from './SendBoxChatRoom';




export default function ChatAppModal(props) {
    const { status, close, recent, info } = props
    const [arrMessage, setArrMessage] = useState([])

    const userInfo = useSelector((state) => state?.auth?.userInfo);
    const { id: myId, username, profileImage } = userInfo

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    
    useEffect(() => {

        socket.on('receiveMessage', (input) => {
            console.log(input,"input");
            if (input?.from === info?.id||input?.from === myId){
                recent(input?.message);
                setArrMessage(p => [...p, input])
            }
        });
        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    const sendMessage = (recentMessage) => {
        console.log(recentMessage, "recentMessage");
        socket.emit('sendMessage', { from: myId, message: recentMessage, to: info?.id });
        // setArrMessage([...arrMessage, { sender: myId, message: recentMessage }]);
    }

    return (
        <div className={`absolute h-full w-full bg-blue-50 top-0 ${status ? ' block ' : ' hidden '}`} onClick={close}>
            <div className='relative h-full w-full flex flex-col mb-10 bg-red-500  faderight' onClick={e => e.stopPropagation()}>
                <HeaderChatRoom myId={myId} onClick={close} />
                <MessageBoxChatRoom myId={myId} arrMessage={arrMessage} />
                <SendBoxChatRoom sendMessage={sendMessage} />
            </div>
        </div>

    )
}
