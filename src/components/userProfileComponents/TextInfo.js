import React, { useState } from "react";
import { Label, Select, TextInput } from "flowbite-react";
import ChangeInterestModal from "./ChangeInterestModal";

function TextInfo({ userInfo = {}, handleChangeInput }) {
  const [isModalShow, setIsModalShow] = useState(false);
  const handleClick = (e) => setIsModalShow(true);
  const handleClose = (e) => setIsModalShow(false);
  return (
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
          value={userInfo?.firstName ?? ""}
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
          value={userInfo.lastName ?? ""}
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
          value={userInfo.email ?? ""}
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
          value={userInfo.aboutMe ?? ""}
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
            onChange={handleChangeInput}
            defaultValue="MALE"
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="UNDEFINE">Undefined</option>
          </Select>
        </div>

        <div className="mb-1 ">
          <Label htmlFor="birthDate" value="Birth Date" />
          <TextInput
            id="birthDate"
            type="text"
            style={{ width: "150px", height: "40px" }}
            sizing="sm"
            placeholder="birthDate"
            name="birthDate"
            value={userInfo.birthDate ?? ""}
            onChange={handleChangeInput}
          />
        </div>
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
          value={userInfo.occupation ?? ""}
          onChange={handleChangeInput}
        />
      </div>
      <div className="border-4 rounded-3xl border-zinc-400 w-[135px] mt-2 flex justify-center items-center">
        <button onClick={handleClick}>Change Interest</button>
      </div>
      <ChangeInterestModal
        isModalShow={isModalShow}
        handleClose={handleClose}
      />
    </div>
  );
}

export default TextInfo;
