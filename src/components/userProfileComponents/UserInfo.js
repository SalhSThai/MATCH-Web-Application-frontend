import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import {
  thunkGetInformation,
  thunkUpdateInformation
} from '../../redux/Slice/AuthSlice';
import Button from '../../reuseComponent/Button';
import TextInfo from './TextInfo';

export default function UserInfo() {
  const initialUserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthDate: '',
    occupation: '',
    profileImage: '',
    aboutMe: ''
    // interestLog: ''
  };

  const [fileInput, setFileInput] = useState(null);
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
    <form
      className='w-full items-center flex flex-col'
      onSubmit={handleSubmitForm}
    >
      <ProfileImage
        setFileInput={setFileInput}
        fileInput={fileInput}
        userInfo={userInfo}
      />
      <TextInfo userInfo={userInfo} handleChangeInput={handleChangeInput} />
      <Button type='submit'>Confirm Edit Profile</Button>
    </form>
  );
}
