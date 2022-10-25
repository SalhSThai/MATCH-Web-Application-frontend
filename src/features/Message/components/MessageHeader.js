import { Avatar, Label } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  SearchIcon,
  MapIcon
} from '../../../asset/IconMessagePage/IconMessage';

export default function MessageHeader() {

  const userInfo = useSelector(state=>state?.auth?.userInfo)
  return (
    <div className=" w-full">
      <div className="flex-grow flex items-center gap-5 py-3">
        <div className={`h-[50px] aspect-square  rounded-full  overflow-hidden`}  ><img src={userInfo?.profileImage} /></div>

        <div>{userInfo?.username}</div>
      </div>
      <div className="w-full flex ">
        <div className="flex justify-around w-full h-[42px] gap-2">
          <div className="flex w-full">
            <div className="gap-2">
              <Label htmlFor="searchbar" />
              <input
                className="rounded-lg w-[330px] bg-[#ffe6de] border-[#ffe6de] "
                id="searchbar"
                type="text"
                placeholder="Search..."
                color="#fd9a7c"
              />
            </div>
            <div className="bg-[#fd9a7c] h-full p-[7px] flex items-center rounded-lg">
              <SearchIcon />
            </div>
          </div>
          <div className="bg-[#fd9a7c] h-full flex items-center px-2 rounded-lg">
            <MapIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
