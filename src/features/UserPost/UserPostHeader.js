import { Avatar, Dropdown } from 'flowbite-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  GridIcon,
  LogoutIcon,
  SettingIcon,
} from '../../asset/UserDropdow/icon';
import { useSelector, useDispatch } from 'react-redux';
import { setCreatePost } from '../../redux/Slice/CreatePostSlice';

function UserPostHeader() {
  const imageEl = useRef();
  const user = useSelector(({ auth: { userInfo } }) => userInfo);
  const dispatch = useDispatch();
  const createPostInfo = useSelector(
    ({ createPost: { CreatePostState } }) => CreatePostState
  );

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
          <Dropdown.Item icon={LogoutIcon}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <form>
        <textarea
          className="rounded-2xl bg-slate-200 w-full h-[150px] overflow-y-scroll scrollbar-hide mt-3"
          name="text"
          value={createPostInfo.text}
          onChange={(e) =>
            dispatch(
              setCreatePost({
                name: e.target.name,
                value: e.target.value,
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
            backgroundSize: 'cover',
          }}
        />
        <div className="flex  w-[400px] items-center justify-around mt-3">
          <button type="button">
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
                    value: e.target.files[0],
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
