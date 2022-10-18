import React from 'react'
import UserIcon from '../../../asset/logo/UserIcon'

export default function MessageContent(props) {
    const { myId = 1, friendId = 2, message = "text", username = "username", sender } = props
    if (sender === myId) {
        return (
            <div className=' w-full h-auto flex justify-end  '>
                <div className={` w-fit h-auto flex flex-col justify-start  bg-slate-300 rounded-2xl rounded-tr-none  translate-y-[30%] my-2 px-5 `}>
                    <div className='flex items-center'><div>{username}</div></div>
                    <div>{message}</div>
                </div>
                <UserIcon />
            </div>)
    }
    else {
        return (<div className='w-full h-auto flex justify-start  '>
            <UserIcon />

            <div className={` left-0 w-fit h-auto flex flex-col justify-start bg-slate-300 rounded-2xl rounded-tl-none translate-y-[30%]  my-2  px-5`}>
                <div className='flex items-center'><div>{username}</div></div>
                <div>{message}</div>
            </div>
        </div>)
    }
}

