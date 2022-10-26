import React from 'react'
import UserIcon from '../../../asset/logo/UserIcon'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function MessageContent(props) {
    const { friendId = 2, message = "text", username = "username", sender, profilePicture = `https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg` } = props
    const myId = useSelector(state => state?.auth?.userInfo?.id)


    if (sender === myId) {
        return (
            <div className=' w-full h-auto flex justify-end  '>
                <section className={` w-fit h-auto flex flex-col justify-start  bg-slate-300 rounded-2xl rounded-tr-none   translate-y-[30%] my-2 px-5 `} >
                    <div className='flex items-center font-medium text-xl m-1'><div>{username}</div></div>
                    <div>{message}</div>
                </section>
                <div className={`h-[50px] aspect-square  rounded-full  overflow-hidden`}  ><img src={profilePicture} /></div>

            </div>)
    }
    else {
        return (<div className='w-full h-auto flex justify-start '>
            <div className={`h-[50px] aspect-square  rounded-full  overflow-hidden`}  ><img src={profilePicture} /></div>
            <div className={` left-0 w-fit h-auto flex flex-col justify-start bg-slate-300 rounded-2xl rounded-tl-none translate-y-[30%]  m-2  px-5`}>
                <div className='flex items-center font-medium text-xl m-1'><div>{username}</div></div>
                <div>{message}</div>
            </div>
        </div>)
    }
}

