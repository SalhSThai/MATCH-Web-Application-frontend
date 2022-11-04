import React from 'react'
import styled from 'styled-components'

export default function MatchBox(props) {
    const { info } = props


    return (
        <div className='relative w-full h-full flex justify-center items-center '>
            <div className=' w-full aspect-[9/16] flex justify-center items-center bg-cover bg-center z-[5] rounded-2xl ' style={{ backgroundImage: `url(${info?.newSwipe?.swipefirstId?.profileImage})` }}>
            </div>
        </div>
    )
}
