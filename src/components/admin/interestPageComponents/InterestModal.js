import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  thunkCreateInterest,
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
  id,
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
  const [iconInput, setIconInput] = useState(null);
  const [imageInput, setImageInput] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setInterestInfo({
      title: title,
      icon: icon,
      interestImage: interestImage,
      description: description
    });
  }, []);

  const handleChangeInput = (e) => {
    setInterestInfo({ ...interestInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('text', interestInfo.title);
    formData.append('icon', iconInput ? iconInput : interestInfo.icon);
    formData.append(
      'interestImage',
      imageInput ? imageInput : interestInfo.interestImage
    );
    formData.append('description', interestInfo.description);
    if (id) {
      dispatch(thunkUpdateInterest(formData, id));
    } else {
      dispatch(thunkCreateInterest(formData));
    }
  };

  return (
    <Modal show={isEditInterestShow}>
      <div className='bg-[#29437E] relative flex rounded-xl w-[60vw]'>
        <CloseButton handleCloseInterestCard={handleCloseInterestCard} />
        <form className='flex w-full h-full' onSubmit={handleSubmitForm}>
          <EditImageContainer
            interestImage={interestInfo?.interestImage}
            imageInput={imageInput}
            setImageInput={setImageInput}
          />
          <EditInterestForm
            title={interestInfo?.title}
            icon={interestInfo?.icon}
            description={interestInfo?.description}
            handleChangeInput={handleChangeInput}
            setIconInput={setIconInput}
            iconInput={iconInput}
            id={id}
          />
        </form>
      </div>
    </Modal>
  );
}
