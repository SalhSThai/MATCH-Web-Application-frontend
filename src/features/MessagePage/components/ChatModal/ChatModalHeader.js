import React from 'react'

export default function ChatModalHeader(props) {
    const  {bind,friendsInfo} = props;
    return (<div className='relative w-full min-h-[10%] bg-white border-[1px] rounded-t-3xl shadow-[0_8px_4px_0px_rgba(0,0,0,0.1)] z-[1] flex justify-center items-center  text-center font-medium text-2xl cursor-grab' {...bind()}>
        <h1 className='cursor-default' >{friendsInfo?.username.toUpperCase()}</h1>
    </div>)

}

