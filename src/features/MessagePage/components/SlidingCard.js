import React from 'react'

export default function SlidingCard(props = {}) {
    const {info:{matchId,matchFriends},createRoom} = props
    return (
        <div  className=' h-full aspect-[9/16] pb-1 flex flex-col'>
            <div className='w-full grow bg-black rounded-2xl bg-cover bg-center' style={{backgroundImage:`url(${matchFriends.profileImage})`}} onClick={e=>createRoom({matchId,matchFriends})}></div>
            <div className='w-full h-fit flex justify-center items-center font-bold text-white'>{matchFriends.username.toUpperCase()}</div>
        </div>
    )
}
