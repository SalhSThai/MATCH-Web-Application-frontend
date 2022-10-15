import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogin } from '../redux/Slice/AuthSlice';

export default function LoginForm() {
  const initialLogin = { email: '', password: '' };
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
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          placeholder="your@gmail.com"
          required={true}
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="your password"
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
          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Forget Password?
        </a>
      </div>
      <div className="pt-5">
        <Button type="submit">Log in to your account</Button>
      </div>
    </form>
  );
}
