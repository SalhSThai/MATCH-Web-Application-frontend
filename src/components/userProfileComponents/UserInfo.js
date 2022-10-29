import { Avatar, Label, Select, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { information, thunkGetInformation } from "../../redux/Slice/AuthSlice";
import Button from "../../reuseComponent/Button";

export default function UserInfo() {
  const inputEl = useRef();
  const [fileInput, setFileInput] = useState(null);

  const initialUserInfo = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
    birthDate: "",
    occupation: "",
    profileImage: "",
    aboutMe: "",
    // interestLog: ''
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const state = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  // dispatch(thunkGetInformation());
  useEffect(() => {
    const getOneUser = async () => {
      dispatch(
        thunkGetInformation(() => {
          const { oneUser } = state?.getInformationState;
          console.log(oneUser);
          setUserInfo({
            firstName: oneUser?.firstName,
            lastName: oneUser?.lastName,
            email: oneUser?.email,
            gender: oneUser?.gender,
            birthDate: oneUser?.birthDate,
            occupation: oneUser?.occupation,
            profileImage: oneUser?.profileImage,
            aboutMe: oneUser?.aboutMe,
          });
        })
      );
      // const res = await userService.getInformation();
      // const { oneUser } = res.data;
      // console.log(state.getInformation, "hhhhhhhh");
      // console.log(state?.getInformationState);
      // const { oneUser } = state?.getInformationState;
      // console.log(oneUser);
      // setUserInfo({
      //   firstName: oneUser?.firstName,
      //   lastName: oneUser?.lastName,
      //   email: oneUser?.email,
      //   gender: oneUser?.gender,
      //   birthDate: oneUser?.birthDate,
      //   occupation: oneUser?.occupation,
      //   profileImage: oneUser?.profileImage,
      //   aboutMe: oneUser?.aboutMe,
      // });
    };
    getOneUser();
  }, [dispatch]);

  const handleChangeInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // dispatch(thunkGetInformation(userInfo));
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
          // value={userInfo.profileImage}
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
            name="firstName"
            value={userInfo?.firstName}
            placeholder="First Name"
            onChange={handleChangeInput}
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
            name="lastName"
            value={userInfo.lastName}
            placeholder="Last Name"
            onChange={handleChangeInput}
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
            name="email"
            value={userInfo.emailOrMobile}
            onChange={handleChangeInput}
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
            name="aboutMe"
            value={userInfo.aboutMe}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-between mt-2">
          <div className="mb-1 ">
            <Label htmlFor="Gender" value="Gender" />
            <Select
              id="Gender"
              style={{ width: "150px", height: "40px" }}
              name="gender"
              value={userInfo.gender}
              onChange={handleChangeInput}
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
              style={{ width: "150px", height: "40px" }}
              sizing="sm"
              placeholder="Age"
              name="age"
              value={userInfo.age}
              onChange={handleChangeInput}
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
            name="interestLog"
            // value={userInfo.interestLog}
            // onChange={handleChangeInput}
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
            name="occupation"
            value={userInfo.occupation}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <Button type="submit">Confirm Edit Profile</Button>
    </form>
  );
}
