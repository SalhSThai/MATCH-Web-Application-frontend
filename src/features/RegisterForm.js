import { Label, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkRegister } from '../redux/Slice/AuthSlice';
import Button from '../reuseComponent/Button';

export default function RegisterForm() {
  const initialUserInfo = {
    username: '',
    firstName: '',
    lastName: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    gender: 'Male',
    birthDate: '2000-01-12',
    role: 'member'
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(thunkRegister(userInfo));
    console.log(state.auth.userInfo);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="user" value="Username" />
        </div>
        <TextInput
          id="user"
          type="text"
          placeholder="Username"
          required={true}
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your emailOrMobile" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="YourEmail@gmail.com"
          required={true}
          value={userInfo.emailOrMobile}
          onChange={(e) =>
            setUserInfo({ ...userInfo, emailOrMobile: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
          placeholder="Your Password"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Confirm password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          required={true}
          placeholder="Confirm password"
          value={userInfo.confirmPassword}
          onChange={(e) =>
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Firstname" value="First Name" />
        </div>
        <TextInput
          id="Firstname"
          type="text"
          required={true}
          placeholder="Your Password"
          value={userInfo.firstName}
          onChange={(e) =>
            setUserInfo({ ...userInfo, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="LastName" value="Last Name" />
        </div>
        <TextInput
          id="LastName"
          type="text"
          required={true}
          placeholder="Your Password"
          value={userInfo.lastName}
          onChange={(e) =>
            setUserInfo({ ...userInfo, lastName: e.target.value })
          }
        />
      </div>
      <div id="select">
        <div className="mb-2 block">
          <Label htmlFor="Gender" value="Gender" />
        </div>
        <Select
          id="Gender"
          required={true}
          onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Undefined">Undefined</option>
        </Select>
        <div className="mb-2 block">
          <Label htmlFor="birthday">Birthday</Label>
          <TextInput
            type="date"
            id="birthday"
            name="birthday"
            value={userInfo.birthDate}
            onChange={(e) =>
              setUserInfo({ ...userInfo, birthDate: e.target.value })
            }
          />
        </div>
      </div>

      <Button type="submit">Create Account</Button>
    </form>
  );
}
