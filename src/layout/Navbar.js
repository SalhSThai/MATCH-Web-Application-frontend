import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChatIcon,
  HomeIcon,
  ExploreIcon,
  UserProfilesIcon,
  WhosLikeMeIcon
} from '../asset/logo/Navbar';

export default function Navbar() {
  const [Home, setHome] = useState(false);
  const [Explore, setExplore] = useState(false);
  const [WhosLikeMe, setWhosLikeMe] = useState(false);
  const [Chat, setChat] = useState(false);
  const [UserProfile, setUserProfile] = useState(false);
  return (
    <div className="bg-white flex justify-around w-full h-[5vh] items-center fixed bottom-0 shadow-[0_-2px_4px_2px_rgba(0,0,0,0.1);] z-[11]">
      <div
        onClick={(e) => {
          setHome(true);
          setExplore(false);
          setWhosLikeMe(false);
          setChat(false);
          setUserProfile(false);
        }}
        className={`${Home ? ' text-[#ed663e]' : ''}`}
      >
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div
        onClick={(e) => {
          setHome(false);
          setExplore(true);
          setWhosLikeMe(false);
          setChat(false);
          setUserProfile(false);
        }}
        className={`${Explore ? ' text-[#ed663e]' : ''}`}
      >
        <Link to="/explore">
          <ExploreIcon />
        </Link>
      </div>
      <div
        onClick={(e) => {
          setHome(false);
          setExplore(false);
          setWhosLikeMe(true);
          setChat(false);
          setUserProfile(false);
        }}
        className={`${WhosLikeMe ? ' text-[#ed663e]' : ''}`}
      >
        <Link to="/likeyou">
          <WhosLikeMeIcon />
        </Link>
      </div>
      <div
        onClick={(e) => {
          setHome(false);
          setExplore(false);
          setWhosLikeMe(false);
          setChat(true);
          setUserProfile(false);
        }}
        className={`${Chat ? ' text-[#ed663e]' : ''}`}
      >
        <Link to="/message">
          <ChatIcon />
        </Link>
      </div>
      <div
        onClick={(e) => {
          setHome(false);
          setExplore(false);
          setWhosLikeMe(false);
          setChat(false);
          setUserProfile(true);
        }}
        className={`${UserProfile ? ' text-[#ed663e]' : ''}`}
      >
        <Link to="/post">
          <UserProfilesIcon />
        </Link>
      </div>
    </div>
  );
}
