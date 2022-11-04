import React, { useEffect } from 'react';
import UserPostContent from './UserPostContent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyPosts } from '../../redux/Slice/PostSlice';

function UserPostBody() {
  const myPosts = useSelector(({ posts: { posts } }) => posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyPosts());
  }, []);

  return (
    <div className=" w-full h-full mt-4 rounded-2xl">
      {myPosts?.map((item, index) => (
        <UserPostContent key={item.id} post={item} />
      ))}
    </div>
  );
}

export default UserPostBody;
