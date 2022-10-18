import React, { useEffect, useState } from 'react';
import HambergerMenu from '../asset/logo/HambergerMenu';
import SendIcon from '../asset/logo/SendIcon';
import TextInputBarChatApp from '../asset/logo/TextInputBarChatApp';
import UserIcon from '../asset/logo/UserIcon';
import io from 'socket.io-client';
import HeaderChatRoom from '../features/ChatAppComponent/HeaderChatRoom';
import MessageBoxChatRoom from '../features/ChatAppComponent/MessageBoxChatRoom';
import SendBoxChatRoom from '../features/ChatAppComponent/SendBoxChatRoom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const socket = io.connect(`http://localhost:8080`);

export default function ChatAppPage(props) {
  const { myId2 = 1, friendId = 2 } = props;
  const { myId3 } = useParams();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [arrMessage, setArrMessage] = useState([]);
  const [recentMessage, setRecentMessage] = useState('');

  const myId = useSelector((state) => state?.auth?.useInfo?.id);
  const dispatch = useDispatch();

  console.log(process.env.PORT);
  console.log('chatApp');
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('disconnect');

      setIsConnected(false);
    });

    socket.on('pong', () => {
      console.log('pong');
      setLastPong(new Date().toISOString());
    });

    socket.on('receiveMessage', (message) => {
      console.log(...arrMessage, 'arr');
      console.log(message);
      setArrMessage((p) => [...p, message]);
      //    if(message?.sender!==myId){ setArrMessage([...arrMessage,message])}
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.off('sendMessage');
    };
  }, []);

  const sendPing = () => {
    console.log('pong');
    socket.emit('ping');
  };
  const joinRoom = () => {
    // if (room !== '' && username !== '') {
    //   socket.emit('join_room', { username, room });
    // }
    socket.emit('pong', 'pong');
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', { sender: myId, message: recentMessage });
    // setArrMessage([...arrMessage, { sender: myId, message: recentMessage }]);
    setRecentMessage('');
  };

  const handleMessage = (e) => {
    setRecentMessage(e.target.value);
  };

  return (
    <div className="h-full w-full flex flex-col mb-10">
      <HeaderChatRoom myId={myId} />
      <MessageBoxChatRoom myId={myId} arrMessage={arrMessage} />
      <SendBoxChatRoom
        handleMessage={handleMessage}
        recentMessage={recentMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}
