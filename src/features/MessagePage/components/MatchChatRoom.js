import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import socket from '../../../config/socket';

export default function MatchChatRoom(props) {
  const {
    openProfilePicture,
    openChat,
    friendsInfo: rawInfo,
    friendId,
    userOnline,
    newMessage
  } = props;
  const state = useSelector((state) => state);
  const myId = state?.auth?.userInfo?.id ?? 1;
  const [recentMessage, setRecentNewMessage] = useState([]);
  const [status, setStatus] = useState(false);
  const [newMessageAlert, setNewMessageAlert] = useState(false)
  const [newMessageStay, setNewMessageStay] = useState(false)
  const recentChat = useSelector(state => state.friends.recentChat);


  useEffect(() => {

    setRecentNewMessage({
      message: rawInfo?.ChatMessages?.[0]?.message,
      time: rawInfo?.ChatMessages?.[0]?.createdAt.slice(11, 16),
      senderId: rawInfo?.ChatMessages?.[0]?.senderId
    })
  }, [rawInfo])

  useEffect(() => {
   
    socket.on('receiveMessage', (MessageObj) => {
      console.log('receiveMessage', MessageObj)
      if (MessageObj?.senderId === friendId) {
        setRecentNewMessage(p => MessageObj)
      }
    })
    return () => { socket.off('receiveMessage'); }
  }, []);

  useEffect(() => {
    const status = userOnline.includes(String(friendId));
    setStatus((p) => status);
  }, [userOnline])
  useEffect(() => {
    if (recentChat?.senderId === myId && recentChat?.to === friendId) {
      setRecentNewMessage(p => recentChat)
    }
  }, [recentChat])

  useEffect(() => {
    const id = setTimeout(() => {
      setNewMessageAlert(false)
    }, 3000)
    return () => clearTimeout(id);
  }, [recentMessage])



  const friendsInfo =
    +myId === +rawInfo?.userLowerId ? { ...rawInfo?.myhigherId } : { ...rawInfo?.mylowerId };


  const handleopenChatRoom = (e) => {
    friendsInfo.roomId = rawInfo?.id;
    openChat(friendsInfo)
    setNewMessageAlert(false)
    setNewMessageStay(false)

  }
  return (
    <div className={`relative w-full h-[100px] bg-slate-500  flex overflow-hidden ${newMessageAlert ? ' shake ' : null} ${newMessageStay ? ' newMessage ' : null}`}>
      {/* //!========================================================================Profile Image */}
      <Link className='p-1' to={`/seepost/${friendId}`} > 
        <div 
        className={`h-full aspect-square  rounded-full overflow-hidden border-[3px] bg-cover bg-center ${status ? ' border-green-300 ' : ' border-red-300 ' }`} 
        style={{backgroundImage:`url(${friendsInfo?.profileImage})`}}  /> 
      </Link>
      {/* //!=========================================================================Profile Image */}
      {/* //!=========================================================================Username Block Message */}

      <div role="button" className="h-full grow flex flex-col gap-2 " onDoubleClick={handleopenChatRoom}>
        <div className="w-full h-[50%]  flex justify-between items-end px-3" >
          <h1 className="text-xl font-bold">{friendsInfo?.username}</h1>{' '}
          <div className={` ${status ? ' text-green-400' : ' text-red-400 '}`}>
            {status ? 'online' : 'offline'}
          </div>
        </div>
        <div className="w-full  h-[50%]  flex flex-col  items-center">
          <p className="text-sm font-normal grow px-5 self-start">{` ${recentMessage.message ?? ''
            }`}</p>{' '}
          <div className="place-self-end text-sm text-right pr-5">{`${recentMessage.time ?? ''
            }`}</div>
        </div>
      </div>
      {/* //!=========================================================================Username Block Message */}

      <div className="absolute  bottom-0 w-full border-t-2 border-slate-100" />
    </div>
  );
}
