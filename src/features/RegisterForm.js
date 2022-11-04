import { Label, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(thunkRegister(userInfo));
    console.log(state.auth.userInfo);
    navigate('/');
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userRegis" value="Username" />
        </div>
        <TextInput
          id="userRegis"
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
          <Label htmlFor="emailRegis" value="Your Email" />
        </div>
        <TextInput
          id="emailRegis"
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
          <Label htmlFor="passwordRegis" value="Your password" />
        </div>
        <TextInput
          id="passwordRegis"
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
          <Label htmlFor="cPasswordRegis" value="Confirm password" />
        </div>
        <TextInput
          id="cPasswordRegis"
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
          <Label htmlFor="firstNameRegis" value="First Name" />
        </div>
        <TextInput
          id="firstNameRegis"
          type="text"
          required={true}
          placeholder="Your First name"
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
          placeholder="Your Last name"
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
