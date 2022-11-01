import { useRef } from "react";

function ProfileImage({ setFileInput, fileInput, userInfo, setUserInfo }) {
  const inputEl = useRef();
  // console.log("file", fileInput);
  // console.log("user", userInfo.profileImage);

  return (
    <div
      className="flex flex-wrap cursor-pointer "
      onClick={() => inputEl.current.click()}
    >
      {fileInput ? (
        <img
          src={URL.createObjectURL(fileInput)}
          alt="userImage1"
          className="w-[10rem] h-[10rem] rounded-full mt-3"
        />
      ) : (
        <img
          src={userInfo?.profileImage}
          alt="userImage2"
          className="w-[10rem] h-[10rem] rounded-full mt-3 "
        />
      )}
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFileInput(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}

export default ProfileImage;
