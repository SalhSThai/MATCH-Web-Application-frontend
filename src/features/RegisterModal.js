import { Modal } from 'flowbite-react';
import RegisterForm from './RegisterForm';

export default function RegisterModal({ isRegisterShow, handleCloseRegister }) {
  return (
    <>
      <Modal
        show={isRegisterShow}
        size='md'
        popup={true}
        onClose={handleCloseRegister}
      >
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Sign in to our platform
            </h3>

            <RegisterForm />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
