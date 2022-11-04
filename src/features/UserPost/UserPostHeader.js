import { Avatar, Dropdown } from 'flowbite-react';

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCreatePost,
  resetCreatePost
} from '../../redux/Slice/CreatePostSlice';
import { CreatePost } from '../../redux/Slice/PostSlice';
import { logout } from '../../redux/Slice/AuthSlice';
import { LogoutIcon, SettingIcon } from '../../asset/UserDropdow/icon';
import Button from '../../reuseComponent/Button';
import { SeeAllIcon } from '../../asset/SeeAll/Icon';

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
        <Link to="/allpost">
          <SeeAllIcon />
        </Link>
        <Dropdown label="Edit">
          <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
            <span className="block text-sm font-medium truncate">
              {user.email}
            </span>
          </Dropdown.Header>
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
        <div className="w-full flex justify-center items-center">
          <textarea
            className="rounded-2xl bg-slate-200 w-[90%] h-[150px] overflow-y-scroll scrollbar-hide"
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
        </div>
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
          alt=""
        />
        <div className="flex w-[400px] items-center justify-evenly mb-5">
          <Button className="font-bold rounded-2xl w-[100px] h-[25px] flex justify-center">
            POST
          </Button>

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

          <Button
            className="font-bold rounded-2xl w-[100px] h-[25px] flex justify-center"
            onClick={() => imageEl.current.click()}
          >
            IMAGE
          </Button>
        </div>
      </form>
    </>
  );
}

export default UserPostHeader;
