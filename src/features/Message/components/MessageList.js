import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import socket from '../../../config/socket';
import { thunkFetchFriends } from '../../../redux/Slice/FriendsSlice';
import FriendsCard from '../../ChatAppComponent/FriendsCard';
import MessageContent from './MessageContent';

function MessageList() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [isConected, setIsConnected] = useState(false)
    const userId = state?.auth?.userInfo?.id ?? 1;
    const allChatRooms = state?.friends?.allChatRooms

// console.log(allChatRooms);

    useEffect(() => {
        dispatch(thunkFetchFriends(userId));
        socket.auth = { userId }
        socket.connect();
        // socket.on('connect', () => {
        //     setIsConnected(true);
        // });
        return () => {
            socket.disconnect();
            // setIsConnected(false);
        }
    }, []);



    const roomNameFn = (myId, userLowerId,userHigherId) =>{ 
        const lowerCheck = myId<userHigherId
        const roomname =lowerCheck? [myId, userHigherId].join(''):[myId, userLowerId].join('');
    return {roomname,lowerCheck}
    }

    const infomation = (myId , info) => {
        
        const lowerCheck = myId<info?.userHigherId
        const roomname =lowerCheck? [myId,info?.userHigherId].join(''):[myId, info?.userLowerId].join('');
        const friendsInfo = lowerCheck? info?.myhigherId:info?.mylowerId ;
        return {roomname,lowerCheck,chatMessage:info?.ChatMessages,friendsInfo,info}
    }


    return (
        <div className='relative w-full h-full flex flex-col gap-1 '>
            {allChatRooms?.map?.((i, d) => <FriendsCard key={i.id} info={infomation(userId,i)} />)}
        </div>
    );
}

export default MessageList;
