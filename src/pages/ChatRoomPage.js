import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkFetchFriends } from '../redux/Slice/FriendsSlice';
import { Link } from 'react-router-dom';
import FriendsCard from '../features/ChatAppComponent/FriendsCard';
import socket from '../config/socket';

export default function ChatRoomPage(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [isConected ,setIsConnected ] = useState(false)
    const userId = state?.auth?.userInfo?.id ?? 1;
    const allFriends = state?.frineds?.allFriends


    useEffect(() => {
        dispatch(thunkFetchFriends(userId));
        socket.auth = { userId }
        socket.connect();
        socket.on('connect', () => {
            setIsConnected(true);
        });
        return () => {
            socket.disconnect();
            setIsConnected(false);
        }
    }, []);

    const roomName = (myId, friendId) => [myId, friendId].sort((a, b) => a > b ? 1 : -1).toString();


    return (
        <div className='relative w-full h-full flex flex-col gap-1 '>
            {allFriends?.map?.((i, d) => <FriendsCard key={i.id} index={d} info={i} roomName={roomName(userId, i?.id)} />)}
        </div>
    )
}
