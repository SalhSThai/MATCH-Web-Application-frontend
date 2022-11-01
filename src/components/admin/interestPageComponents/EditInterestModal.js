import Modal from '../../../reuseComponent/Modal';
import CloseButton from './CloseButton';
import EditImageContainer from './EditImageContainer';
import EditInterestForm from './EditInterestForm';

export default function EditInterestModal({
  isEditInterestShow,
  handleCloseInterestCard
}) {
  console.log('isEditInterestShow', isEditInterestShow);

  return (
    <Modal show={isEditInterestShow}>
      <div className='bg-[#29437E] relative flex rounded-xl w-[60vw]'>
        <EditImageContainer />
        <CloseButton handleCloseInterestCard={handleCloseInterestCard} />
        <EditInterestForm />
      </div>
    </Modal>
  );
}
