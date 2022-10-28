import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogin } from '../redux/Slice/AuthSlice';
import Button from '../reuseComponent/Button';
import logo from '../asset/logo/match.png';
import RegisterModal from './RegisterModal';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ isRegisterShow, handleCloseRegister }) {
  const initialLogin = { username: '', password: '' };
  const [loginInfo, setLoginInfo] = useState(initialLogin);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(thunkLogin(loginInfo));
      console.log(state.auth.userInfo);
      navigate('/');
      console.log('state.auth.userInfo', state.auth.userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col w-[300px] '>
      <div className='flex justify-center '>
        <img className='h-20 w-20 ' src={logo} alt='logo'></img>
      </div>
      <div className='space-y-6 pb-2 w-full '>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
          Log in
        </h3>
        <form onSubmit={handleSubmitForm}>
          <div>
            <div className='mb-2 block '>
              <Label htmlFor='username' value='Username' />
            </div>
            <TextInput
              id='username'
              placeholder='username'
              required={true}
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
          </div>
          <div>
            <div className='mb-2 block my-2'>
              <Label htmlFor='password' value='Password' />
            </div>
            <TextInput
              id='password'
              type='password'
              placeholder='xxxxxx'
              required={true}
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </div>
          <div className='flex justify-between my-5'>
            <div className='flex items-center gap-2'>
              <Checkbox id='remember' />
              <Label htmlFor='remember'>Remember me</Label>
            </div>
          </div>
          <Button type='submit'>Log in to your account</Button>
        </form>

        <RegisterModal
          isRegisterShow={isRegisterShow}
          handleCloseRegister={handleCloseRegister}
        />
      </div>
      <div className='border-b-2 border-gray-500 mb-[8px]'></div>
    </div>
  );
}
