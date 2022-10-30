import { useSpring, animated } from '@react-spring/web'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export default function MyLoading() {
    const spring = useSpring({ loop: true, from: { x: 0, y: 0, scale: 1, opacity: 0 }, to: { x: 0, y: 0, opacity: 1, scale: 3 }, config: { duration: 1000 } })
    const profileImage = useSelector(state => state.auth.userInfo.profileImage)
    const [mylogo, setMyLogo] = useState('')
    useMemo(() => {
        setMyLogo(p => profileImage)
    }, [profileImage])
    return (
        <div className='absolute top-0 left-0 w-full h-full z-[5] bg-white'>
            <div className=' w-full h-full flex justify-center items-center '>
                <div className={` rounded-full  h-[100px] w-[100px]   myprofile`} style={{ backgroundImage: `url(${mylogo})` }}>
                <animated.div className=' rounded-full  h-[100px] w-[100px] border-[3px] flex justify-center items-center border-red-400' style={spring}>
                </animated.div>
                </div>
            </div>
        </div>
    )
}
