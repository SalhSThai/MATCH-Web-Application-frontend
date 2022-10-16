import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogin } from '../redux/Slice/AuthSlice';
import Button from '../reuseComponent/Button';

export default function LoginForm() {
  const initialLogin = { username: '', password: '' };
  const [loginInfo, setLoginInfo] = useState(initialLogin);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(thunkLogin(loginInfo));
    console.log(state.auth.loginInfo);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <div className="mb-2 block ">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          placeholder="username"
          required={true}
          value={loginInfo.username}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, username: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block my-2">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="xxxxxx"
          required={true}
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          href=""
          className="text-sm text-blue-700 hover:underline dark:text-blue-500 my-5"
        >
          Forget Password?
        </a>
      </div>
      <Button type="submit" className="my-2">Log in to your account</Button>
    </form>
  );
}
