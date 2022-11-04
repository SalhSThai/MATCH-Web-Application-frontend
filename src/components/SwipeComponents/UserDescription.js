import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function UserDescription(props) {
  const { username, occupation,info } = props
  const [age,setAge] = useState('')
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
const state = useSelector(state => state);
const [userOnline, setUserOnline] = useState(false)

const onlineUserId = state?.auth?.onlineFriendsArr ?? [];

useEffect(()=>{
  setAge(getAge(info?.birthDate))
},[info])
useEffect(()=>{
  const online = onlineUserId.includes(info.id.toString())
    setUserOnline(online)  
},[onlineUserId])
  return (
    <div className='absolute bottom-0 z-[3] w-full h-[30%]   '>
      <div className='w-full h-full rounded-t-3xl  bg-gradient-to-t from-[rgba(0,0,0,1)20%] to-[rgba(0,0,0,0)] flex flex-col justify-start items-start px-3 gap-1'>
        <div className='w-full  flex justify-start items-center gap-2 pt-5'>
          <div read-only="true" className='text-2xl font-medium text-white select-none'>{info?.username}</div>
          <div read-only="true" className='text-2xl font-medium text-white select-none'>{age}</div>
        </div>
        <div className='w-full flex justify-start items-center gap-2'>
          <div className={`w-3 h-3 rounded-full ${userOnline ? ` bg-green-400 ` : ` bg-red-600 `}`} />
          <div read-only="true" className={`text-xl font-normal text-white select-none ${userOnline ? ` text-green-400 ` : ` text-red-600 `}`}>{userOnline ? ` Active now ` : ` offline `}</div>
        </div>

        <div read-only="true" className='text-xl font-normal text-white select-none'>{info?.aboutMe}</div>
      </div>
    </div>
  );
}
