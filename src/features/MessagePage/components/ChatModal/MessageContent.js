import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useMeasure from 'react-use-measure';

export default function MessageContent(props) {
    const { message = "text", sender, friendsData, myData } = props
    const myId = useSelector(state => state?.auth?.userInfo?.id)
    const username = sender === myId ? myData?.username : friendsData?.username
    const profileImage = sender === myId ? myData?.profileImage : friendsData?.profileImage


    if (sender === myId) {
        return (
            <div className=' w-full h-auto flex justify-end  '>
                <section className={` w-fit h-auto flex flex-col justify-start  bg-slate-300 rounded-2xl rounded-tr-none   translate-y-[30%] my-2 px-5 `} >
                    <div className='flex items-center font-medium text-xl m-1'><div>{username}</div></div>
                    <div>{message}</div>
                </section>
                <div className={`h-[50px] aspect-square  rounded-full  overflow-hidden`}  ><img src={profileImage} /></div>

            </div>)
    }
    else {
        return (<div className='w-full h-auto flex justify-start '>
            <div className={`h-[50px] aspect-square  rounded-full  overflow-hidden`}  ><img src={profileImage} /></div>
            <div className={` left-0 w-fit h-auto flex flex-col justify-start bg-slate-300 rounded-2xl rounded-tl-none translate-y-[30%]  m-2  px-5`}>
                <div className='flex items-center font-medium text-xl m-1'><div>{username}</div></div>
                <div>{message}</div>
            </div>
        </div>)
    }
}

