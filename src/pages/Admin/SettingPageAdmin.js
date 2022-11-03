import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputInfo from '../../components/admin/settingPageComponents/InputInfo';
import ProfileImage from '../../components/userProfileComponents/ProfileImage';
import {
  logout,
  thunkGetInformation,
  thunkUpdateInformation
} from '../../redux/Slice/AuthSlice';

export default function SettingPageAdmin() {
  const [fileInput, setFileInput] = useState(null);

  const initialUserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthDate: '',
    occupation: '',
    profileImage: '',
    aboutMe: ''
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const state = useSelector((state) => state?.auth);
  const oneUser = state?.getInformationState;
  const dispatch = useDispatch();
  // dispatch(thunkGetInformation());
  useEffect(() => {
    dispatch(thunkGetInformation());
  }, []);

  useEffect(() => {
    // console.log(fileInput);
    setUserInfo({
      firstName: oneUser?.firstName,
      lastName: oneUser?.lastName,
      email: oneUser?.email || ' ',
      gender: oneUser?.gender,
      birthDate: oneUser?.birthDate,
      occupation: oneUser?.occupation,
      profileImage: oneUser?.profileImage,
      aboutMe: oneUser?.aboutMe
    });

    // console.log(userInfo);
    // setFileInput(oneUser?.profileImage);
    // console.log(fileInput);
    // console.log(fileInput);
  }, [oneUser]);

  const handleChangeInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log(fileInput);
    // console.log(userInfo.profileImage);
    const formData = new FormData();
    formData.append('firstName', userInfo.firstName);
    formData.append('lastName', userInfo.lastName);
    formData.append('email', userInfo.email);
    formData.append('gender', userInfo.gender);
    formData.append('birthDate', userInfo.birthDate);
    formData.append('occupation', userInfo.occupation);
    formData.append('profileImage', fileInput);
    formData.append('aboutMe', userInfo.aboutMe);
    dispatch(thunkUpdateInformation(formData));
    // console.log(fileInput);
    // setFileInput(null);
    // dispatch(thunkGetInformation());
  };

  return (
    <div className='w-full flex justify-center'>
      <form
        className='w-fit items-center justify-center flex flex-col border border-1 border-slate-500 rounded-xl py-5 px-20 bg-[#26263e]'
        onSubmit={handleSubmitForm}
      >
        <ProfileImage
          setFileInput={setFileInput}
          fileInput={fileInput}
          userInfo={userInfo}
        />
        <InputInfo userInfo={userInfo} handleChangeInput={handleChangeInput} />
        <button
          className='bg-match-dark hover:bg-opacity-80  rounded-xl py-3 px-5 text-white font-semibold'
          type='submit'
        >
          Confirm Edit Profile
        </button>
        <br />
        <button
          className='bg-[#29437E] hover:bg-opacity-80 rounded-xl py-3 px-5 text-white font-semibold'
          type='submit'
          onClick={() => dispatch(logout())}
        >
          Log out
        </button>
      </form>
    </div>
  );
}
