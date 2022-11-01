import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InterestShow from "../../features/InterestComponent/InterestShow";
import { thunkFetchInterest } from "../../redux/Slice/IntetrestSlice";
import Modal, { ModalHeader } from "../../reuseComponent/Modal";

function ChangeInterestModal({ isModalShow, handleClose }) {
  const interest = useSelector((state) => state.interest);
  const dispatch = useDispatch();
  console.log(interest);

  useEffect(() => {
    dispatch(thunkFetchInterest());
    //   console.log(interest);
  }, []);
  return (
    <Modal show={isModalShow}>
      <ModalHeader onClose={handleClose}></ModalHeader>

      <div className=" w-full h-screen bg-red-300 text-black overflow-y-scroll scrollbar-hide">
        <div className="w-full gap-1.5 h-[40px] text-center flex flex-wrap mt-10">
          {interest.allInterest?.map?.((items, index) => (
            <InterestShow key={index} title={items.text} icon={items.icon} />
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ChangeInterestModal;
