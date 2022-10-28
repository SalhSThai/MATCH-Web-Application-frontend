import { Avatar, Dropdown } from 'flowbite-react';

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCreatePost,
  resetCreatePost
} from '../../redux/Slice/CreatePostSlice';
import { CreatePost } from '../../redux/Slice/PostSlice';
import { logout } from '../../redux/Slice/AuthSlice';
import {
  GridIcon,
  LogoutIcon,
  SettingIcon
} from '../../asset/UserDropdow/icon';

function UserPostHeader() {
  const imageEl = useRef();
  const user = useSelector(({ auth: { userInfo } }) => userInfo);
  const dispatch = useDispatch();
  const createPostInfo = useSelector(
    ({ createPost: { CreatePostState } }) => CreatePostState
  );

  const handleOnClickSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (createPostInfo.image !== '') {
        formData.append('image', createPostInfo.image);
      }
      if (createPostInfo.text !== '') {
        console.log(createPostInfo.text);
        formData.append('text', createPostInfo.text);
      }

      dispatch(CreatePost(formData));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(resetCreatePost());
    }
  };

  return (
    <>
      <div className=" flex justify-between items-center w-full py-2">
        <Avatar rounded={true} img={user.profileImage} />

        <Dropdown label="Setting">
          <Dropdown.Header>
            <span className="block text-sm">Username</span>
            <span className="block text-sm font-medium truncate">
              {user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={GridIcon}>Dashboard</Dropdown.Item>
          <Link to="/userProfile">
            <Dropdown.Item icon={SettingIcon}>Settings</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item icon={LogoutIcon} onClick={() => dispatch(logout())}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
      <form onSubmit={handleOnClickSubmit}>
        <textarea
          className="rounded-2xl bg-slate-200 w-full h-[150px] overflow-y-scroll scrollbar-hide mt-3"
          name="text"
          value={createPostInfo.text}
          onChange={(e) =>
            dispatch(
              setCreatePost({
                name: e.target.name,
                value: e.target.value
              })
            )
          }
        />
        <img
          src={
            createPostInfo?.image
              ? URL.createObjectURL(createPostInfo?.image)
              : ''
          }
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
        <div className="flex  w-[400px] items-center justify-around mt-3">
          <button type="submit">
            <div className="font-bold rounded-2xl bg-slate-500 w-[100px] h-[25px] flex justify-center">
              POST
            </div>
          </button>
          <input
            type={'file'}
            style={{ display: 'none' }}
            name="image"
            ref={imageEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                console.log(e.target.files[0]);
                dispatch(
                  setCreatePost({
                    name: e.target.name,
                    value: e.target.files[0]
                  })
                );
              }
            }}
          />
          <button type="button" onClick={() => imageEl.current.click()}>
            <div className="font-bold rounded-2xl bg-slate-500 w-[100px] h-[25px] flex justify-center">
              IMAGE
            </div>
          </button>
        </div>
      </form>
    </>
  );
}

export default UserPostHeader;
