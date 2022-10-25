import { Avatar, Dropdown } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  GridIcon,
  LogoutIcon,
  SettingIcon
} from '../../asset/UserDropdow/icon';

function UserPostHeader() {
  return (
    <>
      <div className=" flex justify-between items-center w-full py-2">
        <Avatar rounded={true} />

        <Dropdown label="Setting">
          <Dropdown.Header>
            <span className="block text-sm">Username</span>
            <span className="block text-sm font-medium truncate">
              useremail@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={GridIcon}>Dashboard</Dropdown.Item>
          <Link to="/userProfile">
            <Dropdown.Item icon={SettingIcon}>Settings</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item icon={LogoutIcon}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <textarea className="rounded-2xl bg-slate-200 w-full h-[150px] overflow-y-scroll scrollbar-hide mt-3" />
      <div className="flex  w-[400px] items-center justify-around mt-3">
        <button type="button">
          <div className="font-bold rounded-2xl bg-slate-500 w-[100px] h-[25px] flex justify-center">
            POST
          </div>
        </button>
        <button type="button">
          <div className="font-bold rounded-2xl bg-slate-500 w-[100px] h-[25px] flex justify-center">
            IMAGE
          </div>
        </button>
      </div>
    </>
  );
}

export default UserPostHeader;
