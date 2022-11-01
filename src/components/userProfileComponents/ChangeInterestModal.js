import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InterestShow from '../../features/InterestComponent/InterestShow';
import { thunkFetchInterest } from '../../redux/Slice/IntetrestSlice';
import Modal, { ModalHeader } from '../../reuseComponent/Modal';

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
      <div className=" absolute top-0 left-0 w-full h-full">
        <ModalHeader className={'bg-white'} onClose={handleClose}></ModalHeader>

        <div className=" w-full h-full bg-white text-black overflow-y-scroll scrollbar-hide">
          <div className="w-full gap-1.5 h-[40px] text-center flex flex-wrap mt-10">
            {interest.allInterest?.map?.((items, index) => (
              <InterestShow key={index} title={items.text} icon={items.icon} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ChangeInterestModal;
