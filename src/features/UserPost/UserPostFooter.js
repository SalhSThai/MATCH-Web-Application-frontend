import { Avatar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SendIcon from '../../asset/logo/SendIcon';
import { CommentIcon, LikeIcon } from '../../asset/SeeYourProfile/Icon';
import iu from '../../asset/profileUser/iu.png';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {
  addComment,
  createComment,
  toggleLikethunk,
} from '../../redux/Slice/PostSlice';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

function UserPostFooter({ post }) {
  const createCommentstate = useSelector(
    ({ comment: { createComment } }) => createComment
  );
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [isCommentShow, setIsCommentShow] = useState(false);

  const handleOnClickCreateComment = () => {
    dispatch(createComment({ content: comment, postId: post.id }));
  };
  const handleOnClickLike = () => {
    dispatch(toggleLikethunk({ postId: post.id }));
  };

  return (
    <>
      <div className="flex justify-between items-center mx-7 border-b-2">
        <button type="button">
          <div className="mt-2 mb-2">
            {post.Likes.length === 0 ? '' : post.Likes.length + 'Like'}{' '}
          </div>
        </button>
        <button type="button">
          <div className="mt-2 mb-2">
            {post.Comments.length === 0
              ? ''
              : post.Comments.length + 'Comments'}{' '}
          </div>
        </button>
      </div>
      <div className="flex justify-around items-center mt-1 mb-1 ">
        <button type="button" onClick={handleOnClickLike}>
          <LikeIcon />
        </button>
        <button type="button" onClick={() => setIsCommentShow((prev) => !prev)}>
          <CommentIcon />
        </button>
      </div>
      {isCommentShow ? (
        <>
          {post.Comments.map((item) => (
            <div
              className="pt-1 pb-1 mx-4 bg-slate-200 rounded-xl w-full flex"
              key={item.id}
            >
              <Avatar rounded={true} img={item.User.profileImage} />
              <div className="mx-3">
                <div>
                  {item.User?.firstName} {item.User?.lastName}
                </div>
                <div>{item.content}</div>
                <small>
                  {timeAgo.format(
                    new Date(item.createdAt) - 30 * 1000,
                    'mini-now'
                  )}
                </small>
              </div>
            </div>
          ))}

          <div className="w-full h-[50px] flex items-center gap-3 px-2">
            <Avatar rounded={true} />

            <input
              className="bg-[#ffeef0] w-full h-[30px] rounded-xl"
              onChange={(e) => dispatch(setComment(e.target.value))}
              value={comment}
            ></input>

            <SendIcon onClick={handleOnClickCreateComment} />
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default UserPostFooter;
