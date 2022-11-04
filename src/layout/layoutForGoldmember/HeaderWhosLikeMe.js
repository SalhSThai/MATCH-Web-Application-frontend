import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const likedMe = useSelector((state) => state.swipe);
  const Melike = useSelector((state) => state.swipe);
  const [LikedMe, setLikedMe] = useState(false);
  const [MeLiked, setMeLiked] = useState(false);
  return (
    <div className="w-full flex justify-around p-2 bg-[#ffbfac] rounded-2xl">
      <div
        onClick={(e) => {
          setLikedMe(true);
          setMeLiked(false);
        }}
        className={`font-mali font-extralight ${
          LikedMe ? ' font-bold text-fuchsia-400' : ''
        }`}
      >
        <Link to="/likeyou" type="button">
          {likedMe?.wholikeme?.length} Likes
        </Link>
      </div>

      <div
        onClick={(e) => {
          setMeLiked(true);
          setLikedMe(false);
        }}
        className={`font-mali font-extralight ${
          MeLiked ? ' font-bold text-fuchsia-400' : ''
        }`}
      >
        <Link to="/youlike" type="button">
          {Melike?.whoILike?.length} Liked
        </Link>
      </div>
    </div>
  );
}
