import Modal from '../../../reuseComponent/Modal';
import EditImageContainer from './EditImageContainer';
import EditInfoContainer from './EditInfoContainer';

export default function EditInterestModal({
  isEditInterestShow,
  handleCloseInterestCard
}) {
  console.log('isEditInterestShow', isEditInterestShow);

  return (
    <Modal show={isEditInterestShow}>
      <div className='bg-[#29437E] flex rounded-xl w-[60vw]'>
        <EditImageContainer />
        <EditInfoContainer handleCloseInterestCard={handleCloseInterestCard} />
      </div>
    </Modal>
  );
}
