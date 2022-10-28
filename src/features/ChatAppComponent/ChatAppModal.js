import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../config/socket';
import { thunkAddMessage } from '../../redux/Slice/FriendsSlice';
import HeaderChatRoom from './HeaderChatRoom';
import MessageBoxChatRoom from './MessageBoxChatRoom';
import SendBoxChatRoom from './SendBoxChatRoom';




export default function ChatAppModal(props) {
    const { status, close, recent,setNewMessageTriger } = props
    const { chatMessage = [], friendsInfo, roomname, lowerCheck, info } = props.info
    const [arrMessage, setArrMessage] = useState([...chatMessage])

    const userInfo = useSelector((state) => state?.auth?.userInfo);
    const { id: myId, username, profileImage} = userInfo

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {

        setNewMessageTriger(false)
        socket.on('receiveMessage', (input) => {
            console.log(input, "input");
            if (input?.from === friendsInfo?.id ) {
                recent(input?.message);
                const newMessage = {
                    senderId: input?.from,
                    message: input?.message,
                    User: { username, profileImage }
                }
                console.log(newMessage);
                setNewMessageTriger(true)
                setArrMessage(p => [...p, input])
            }
        });
        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    const sendMessage = (recentMessage) => {
        dispatch(thunkAddMessage(recentMessage,myId,info?.id))
        console.log(recentMessage, "recentMessage");
        recent(recentMessage);
        const newMessage = {
            from: myId,
            senderId: myId,
            to: friendsInfo?.id,
            message: recentMessage,
            User: { username, profileImage }
        }
        console.log(newMessage);
        socket.emit('sendMessage',newMessage);
        setArrMessage(p => [...p, newMessage])


    }

    return (
        <div className={`fixed h-full w-full bg-blue-50 top-0 left-0 ${status ? ' block ' : ' hidden '}`} onClick={close}>
            <div className='relative h-full w-full flex flex-col mb-10 bg-red-500  faderight' onClick={e => e.stopPropagation()}>
                <HeaderChatRoom myId={myId} onClick={close} />
                <MessageBoxChatRoom myId={myId} arrMessage={arrMessage} friendsInfo={friendsInfo} />
                <SendBoxChatRoom sendMessage={sendMessage} />
            </div>
        </div>

    )
}
