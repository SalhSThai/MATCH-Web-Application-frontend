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
    userOnline
  } = props;
  const state = useSelector((state) => state);
  const myId = state?.auth?.userInfo?.id ?? 1;
  const [recentMessage, setRecentNewMessage] = useState('');
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const status = userOnline.includes(String(friendId));
    setStatus((p) => status);
  }, []);
  const friendsInfo =
    +myId === +rawInfo?.userLowerId ? rawInfo?.myhigherId : rawInfo?.mylowerId;
  return (
    <div className="relative w-full h-[100px] bg-white  flex overflow-hidden  ">
      <Link
        to={`/seepost/${friendId}`}
        className={`h-aut aspect-square  rounded-full m-2 overflow-hidden border-[3px] ${
          status ? ' border-green-300 ' : ' border-red-300 '
        }`}
        onClick={openProfilePicture}
      >
        <img src={friendsInfo?.profileImage} />
      </Link>

      <div className="h-full grow flex flex-col gap-2 " onClick={openChat}>
        <div className="w-full h-[50%]  flex justify-between items-end px-3">
          <h1 className="text-xl font-bold">{friendsInfo?.username}</h1>{' '}
          <div className={` ${status ? ' text-green-400' : ' text-red-400 '}`}>
            {status ? 'online' : 'offline'}
          </div>
        </div>
        <div className="w-full  h-[50%]  flex flex-col  items-center">
          <p className="text-sm font-normal grow px-5 self-start">{` ${
            rawInfo?.ChatMessages?.[0]?.message ?? ''
          }`}</p>{' '}
          <div className="place-self-end text-sm text-right pr-5">{`${
            rawInfo?.ChatMessages?.[0]?.createdAt.slice(11, 16) ?? ''
          }`}</div>
        </div>
      </div>
      <div className="absolute  bottom-0 w-full border-t-2 border-slate-100" />
    </div>
  );
}
