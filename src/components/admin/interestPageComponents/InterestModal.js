import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  thunkFetchInterest,
  thunkUpdateInterest
} from '../../../redux/Slice/IntetrestSlice';
import Modal from '../../../reuseComponent/Modal';
import CloseButton from './CloseButton';
import EditImageContainer from './EditImageContainer';
import EditInterestForm from './EditInterestForm';

export default function InterestModal({
  isEditInterestShow,
  handleCloseInterestCard,
  title,
  icon,
  interestImage,
  description
}) {
  const initialInterestInfo = {
    title: '',
    icon: '',
    interestImage: '',
    description: ''
  };

  const [interestInfo, setInterestInfo] = useState(initialInterestInfo);

  const state = useSelector((state) => state?.interest);
  const newInput = state?.getInformationState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchInterest());
  }, []);

  useEffect(() => {
    setInterestInfo({
      title: newInput?.title,
      icon: newInput?.icon,
      interestImage: newInput?.interestImage,
      description: newInput?.description
    });
  }, [newInput]);

  const handleChangeInput = (e) => {
    setInterestInfo({ ...interestInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', interestInfo.title);
    formData.append('icon', interestInfo.icon);
    formData.append('interestImage', interestInfo.interestImage);
    formData.append('description', interestInfo.description);
    dispatch(thunkUpdateInterest(formData));
  };

  return (
    <Modal show={isEditInterestShow}>
      <div className='bg-[#29437E] relative flex rounded-xl w-[60vw]'>
        <CloseButton handleCloseInterestCard={handleCloseInterestCard} />
        <form className='flex w-full h-full' onSubmit={handleSubmitForm}>
          <EditImageContainer
            interestImage={interestImage}
            interestInfo={interestInfo}
          />
          <EditInterestForm
            title={title}
            icon={icon}
            description={description}
            interestInfo={interestInfo}
            handleChangeInput={handleChangeInput}
          />
        </form>
      </div>
    </Modal>
  );
}
