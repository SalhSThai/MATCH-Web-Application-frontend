import ChatAppModal from './ChatAppModal';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import socket from '../../config/socket';

export default function FriendsCard(props) {
    const { info,  roomName } = props
    const [openChat, setOpenChat] = useState(false)
    const [recentMessage,setRecentMessage] = useState('')
    useEffect(() => {
        // socket.emit('join_room', roomName);
        
        // socket.on('receiveMessage', (input) => {
        //     console.log(input,"input");
        //     setRecentMessage(p=>input.message)
        // });
        
        return () => {
            // socket.off('join_room');
            // socket.off('receiveMessage');
        }
    }, [])


    return (
        <div className='w-full h-[100px] flex justify-between items-center bg-slate-200  rounded-xl'>
             <ChatAppModal status={openChat} info={info} close={e => setOpenChat(false)} recent={message=>setRecentMessage(p=>message)} roomName={roomName}/> 

            <div className={`h-full aspect-square  rounded-full  overflow-hidden`}  ><img src={info?.profileImage} /></div>
            <div className='grow h-full flex-col flex justify-evenly items-start ml-2' onClick={e => setOpenChat(true)}>
                <h1 className='text-2xl font-medium'>{info?.username}</h1>
                <p className='text-xl'>{recentMessage}</p>
            </div>
        </div>
    )
}