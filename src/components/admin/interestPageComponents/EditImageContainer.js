import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkFetchInterest } from '../../../redux/Slice/IntetrestSlice';
import BrowseImageButton from './BrowseImageButton';

export default function EditImageContainer({
  interestImage,
  imageInput,
  setImageInput
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchInterest());
  }, [imageInput]);

  console.log('imageInput', imageInput);

  return (
    <div className='w-1/2 h-sfull relative'>
      {imageInput ? (
        <div
          className='rounded-l-xl h-full bg-cover'
          style={{
            backgroundImage: `url('${URL.createObjectURL(imageInput)}')`
          }}
        ></div>
      ) : interestImage ? (
        <div
          className='rounded-l-xl h-full bg-cover'
          style={{ backgroundImage: `url('${interestImage}')` }}
        ></div>
      ) : (
        <div className='w-full h-full flex justify-center items-center text-white bg-[#26263e] rounded-l-xl'>
          Please add image
        </div>
      )}
      <BrowseImageButton
        interestImage={interestImage}
        setImageInput={setImageInput}
      />
    </div>
  );
}
