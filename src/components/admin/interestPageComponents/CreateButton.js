import { useState } from 'react';
import { AddIcon } from '../../../asset/Icon/IconForAdminInterestPage';
import InterestModal from './InterestModal';

export default function CreateButton() {
  const [isEditInterestShow, setIsEditInterestShow] = useState(false);

  const handleClickInterestCard = (e) => setIsEditInterestShow(true);
  const handleCloseInterestCard = (e) => setIsEditInterestShow(false);

  return (
    <>
      <div
        className='flex border-2 border-match-dark rounded-lg'
        onClick={handleClickInterestCard}
      >
        <button className='flex items-center justify-center bg-match-dark px-4 py-2 text-white gap-2'>
          <AddIcon />
          <div>Create</div>
        </button>
      </div>
      <InterestModal
        isEditInterestShow={isEditInterestShow}
        handleCloseInterestCard={handleCloseInterestCard}
      />
    </>
  );
}
