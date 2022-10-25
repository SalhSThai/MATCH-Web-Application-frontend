import { Avatar, Label, Select, TextInput } from 'flowbite-react';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkUpdateUser } from '../../redux/Slice/AuthSlice';
import Button from '../../reuseComponent/Button';

export default function UserInfo() {
  const inputEl = useRef();
  const [fileInput, setFileInput] = useState(null);

  const initialUserInfo = {
    firstName: '',
    lastName: '',
    emailOrMobile: '',
    gender: 'Male',
    occupation: '',
    profileImage: '',
    aboutMe: '',
    interestLog: ''
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(thunkUpdateUser(userInfo));
    console.log(state.auth.userInfo);
  };

  return (
    <form
      className="w-full items-center flex flex-col"
      onSubmit={handleSubmitForm}
    >
      <div
        className="flex flex-wrap cursor-pointer"
        onClick={() => inputEl.current.click()}
      >
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          size="lg"
        />
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          value={userInfo.profileImage}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFileInput(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-1 w-full p-1">
        <div>
          <div className="mb-1 block">
            <Label htmlFor="small" value="First Name" />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            value={userInfo.firstName}
            placeholder="First Name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="small" value="Last Name" />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            value={userInfo.lastName}
            placeholder="Last Name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="text"
            placeholder="Email"
            sizing="sm"
            value={userInfo.emailOrMobile}
            onChange={(e) =>
              setUserInfo({ ...userInfo, emailOrMobile: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="aboutme" value="About me" />
          </div>
          <textarea
            id="aboutme"
            type="text"
            className=" w-full rounded-xl border-[#d6dadf] bg-[#f9fafb] resize-none"
            sizing="sm"
            placeholder="About me"
            value={userInfo.aboutMe}
            onChange={(e) =>
              setUserInfo({ ...userInfo, aboutMe: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between mt-2">
          <div className="mb-1 ">
            <Label htmlFor="Gender" value="Gender" />
            <Select
              id="Gender"
              style={{ width: '150px', height: '40px' }}
              onChange={(e) =>
                setUserInfo({ ...userInfo, gender: e.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Undefined">Undefined</option>
            </Select>
          </div>

          <div className="mb-1 ">
            <Label htmlFor="Age" value="Age" />
            <TextInput
              id="Age"
              type="text"
              style={{ width: '150px', height: '40px' }}
              sizing="sm"
              placeholder="Age"
              // value={userInfo.occupation}
              // onChange={(e) =>
              //   setUserInfo({ ...userInfo, occupation: e.target.value })
              // }
            />
          </div>
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="Interest" value="Interest" />
          </div>
          <TextInput
            id="Interest"
            type="text"
            sizing="sm"
            placeholder="Interest"
            value={userInfo.interestLog}
            onChange={(e) =>
              setUserInfo({ ...userInfo, interestLog: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="Occupation" value="Occupation" />
          </div>
          <TextInput
            id="Occupation"
            type="text"
            sizing="sm"
            placeholder="Occupation"
            value={userInfo.occupation}
            onChange={(e) =>
              setUserInfo({ ...userInfo, occupation: e.target.value })
            }
          />
        </div>
      </div>
      <Button type="submit">Confirm Edit Profile</Button>
    </form>
  );
}
