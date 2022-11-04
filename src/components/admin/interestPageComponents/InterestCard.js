import { useState } from 'react';
import InterestModal from './InterestModal';

export default function InterestCard({
  id,
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
        <div
          className='rounded-t-xl h-full bg-cover'
          style={{
            backgroundImage: `url('${interestImage}')`
          }}
        ></div>
        <div className='px-5 py-3 flex justify-between items-center align-middle'>
          <div className='text-white text-2xl'>{title}</div>
          <div className='w-8 h-8 flex justify-center items-center'>
            <img src={icon} className='w-10 rounded-xl' />
          </div>
        </div>
      </div>
      <InterestModal
        isEditInterestShow={isEditInterestShow}
        handleCloseInterestCard={handleCloseInterestCard}
        id={id}
        title={title}
        icon={icon}
        interestImage={interestImage}
        description={description}
      />
    </>
  );
}
