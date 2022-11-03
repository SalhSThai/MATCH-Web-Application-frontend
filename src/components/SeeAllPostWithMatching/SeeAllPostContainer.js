import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyMatchPosts } from '../../redux/Slice/PostSlice';
import SeeAllPostContent from './SeeAllPostContent';

function SeeAllPostContainer() {
  const allPosts = useSelector(({ posts: { posts } }) => posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMatchPosts());
  }, []);
  console.log(allPosts);
  return (
    <div className=" w-full h-full mt-4 rounded-2xl">
      {allPosts?.map((item, index) => (
        <SeeAllPostContent key={item?.id} post={item} />
      ))}
    </div>
  );
}

export default SeeAllPostContainer;
