import React from 'react'
import MessageContent from './components/MessageContent'

export default function MessageBoxChatRoom(props) {
    const {myId,arrMessage = []} = props
    console.log("Box");
    console.log(arrMessage);


    return (<div className='h-full w-full bg-slate-200 flex flex-col items-center justify-start '>
        {/* <MessageContent />
        <MessageContent sender={myId} /> */}
        {arrMessage?.map?.((i,d)=><MessageContent key={d} sender={i?.sender} message={i?.message}/>)}


        {/* <p>Connected: {'username' + isConnected}</p>
        <p>Last pong: {lastPong || '-'}</p>
        <button onClick={sendPing}>Send ping</button> */}

    </div>)
}
