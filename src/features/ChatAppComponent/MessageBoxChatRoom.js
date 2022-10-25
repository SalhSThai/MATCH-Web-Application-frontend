import React from 'react'
import MessageContent from './components/MessageContent'

export default function MessageBoxChatRoom(props) {
    const {myId,arrMessage = [],friendsInfo} = props


    return (<div className='h-full w-full bg-slate-200 flex flex-col items-center justify-start z-50'>
        {/* <MessageContent />
        <MessageContent sender={myId} /> */}
        {arrMessage?.map?.((i,d)=><MessageContent key={d} sender={i?.senderId} username={i?.User?.username} message={i?.message} profilePicture={i?.User.profileImage}/>)}


        {/* <p>Connected: {'username' + isConnected}</p>
        <p>Last pong: {lastPong || '-'}</p>
        <button onClick={sendPing}>Send ping</button> */}

    </div>)
}
