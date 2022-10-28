import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMeasure from 'react-use-measure';
import socket from '../../../../config/socket';
import MessageContent from './MessageContent';

export default function ChatModalBody(props) {
    const { friendsInfo } = props

    const { chatRoomData, friendsData } = useSelector(state => state.friends.currentRoomInfo);
    const dispatch = useDispatch();
    const myData = useSelector(state => state.auth.userInfo)
    const [allMessage, setAllMessage] = useState([]);
    const recentChat = useSelector(state => state.friends.recentChat);
    const { shake, color } = useSelector(state => state.friends.recentTrigle);


    useEffect(() => {
        setAllMessage(p => chatRoomData)
        socket.on('receiveMessage', (MessageObj) => {
            if (MessageObj?.senderId === friendsData?.id) setAllMessage((p = []) => [...p, MessageObj]);
        })
        return () => setAllMessage([])
    }, [chatRoomData])

    useEffect(() => {
        setAllMessage((p = []) => [...p, recentChat])
    }, [recentChat])

    return (
        <div id="body" className='w-full grow pb-[20%] scrollbar-hide overflow-y-scroll bg-slate-100 border-gray-100 border-r-[1px] border-l-[1px] flex flex-col justify-end'>
            {allMessage?.map?.((i, d) => <MessageContent key={d} friendsData={friendsData} myData={myData} sender={i?.senderId} message={i?.message} />)}
        </div>)

}