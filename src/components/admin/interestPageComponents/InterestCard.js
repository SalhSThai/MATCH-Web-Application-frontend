import { useState } from 'react';
import InterestModal from './InterestModal';

export default function InterestCard({
  title,
  icon,
  interestImage,
  description
}) {
  const [isEditInterestShow, setIsEditInterestShow] = useState(false);

  const handleClickInterestCard = (e) => setIsEditInterestShow(true);
  const handleCloseInterestCard = (e) => setIsEditInterestShow(false);

  return (
    <>
      <div
        className='w-48 h-60 bg-[#29437E] rounded-xl flex flex-col justify-between cursor-pointer'
        onClick={handleClickInterestCard}
      >
        <div className='w-full h-full object-contain'>
          <img
            src={interestImage}
            alt='Interest picture'
            className='rounded-t-xl h-full'
          />
        </div>
        <div className='px-6 py-3 flex justify-between items-center'>
          <div className='text-white font-semibold text-2xl'>{title}</div>
          <img src={icon} className='w-10 rounded-xl' />
        </div>
      </div>
      <InterestModal
        isEditInterestShow={isEditInterestShow}
        handleCloseInterestCard={handleCloseInterestCard}
        title={title}
        icon={icon}
        interestImage={interestImage}
        description={description}
      />
    </>
  );
}
