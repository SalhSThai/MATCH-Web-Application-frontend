import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import socket from '../../config/socket';
import ChatAppModal from './ChatAppModal';
import { Link } from 'react-router-dom';

export default function FriendsCard(props) {
  const { chatMessage, friendsInfo, roomname, lowerCheck, info } = props.info;
  const [openChat, setOpenChat] = useState(false);
  const [recentMessage, setRecentMessage] = useState('');
  const [newMessageTriger, setNewMessageTriger] = useState(false);
  console.log(friendInfo);
  useEffect(() => {
    setRecentMessage((p) => chatMessage[chatMessage?.length - 1]?.message);
    return () => {
      // socket.off('join_room');
      // socket.off('receiveMessage');
    };
  }, []);

  // shadow-[4px_5px_4px_2px_rgba(0,0,0,0.1)
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <div
        className={`w-[95%]  h-[95%] flex justify-between items-center bg-white  rounded-xl mt-3 shadow-[4px_5px_4px_2px_rgba(0,0,0,0.1)]  ${
          newMessageTriger ? ' shake ' : ''
        }`}
      >
        <ChatAppModal
          status={openChat}
          info={props.info}
          close={(e) => setOpenChat(false)}
          recent={(message) => setRecentMessage((p) => message)}
          setNewMessageTriger={(triger) => setNewMessageTriger(triger)}
        />

        <Link
          to={`/seepost/${id}`}
          className={`h-full aspect-square  rounded-full  overflow-hidden  shadow-[2px_2px_8px_4px_rgba(0,0,0,0.2)]`}
        >
          <img
            src={friendsInfo?.profileImage}
            onClick={(e) => console.log(friendsInfo)}
          />
        </Link>
        <div
          className=" grow h-full flex-col flex justify-evenly items-start ml-2"
          onClick={(e) => setOpenChat(true)}
        >
          <h1 className="text-2xl font-medium">{friendsInfo?.username}</h1>
          <p className="text-xl">{recentMessage}</p>
        </div>
      </div>
    </div>
  );
}
