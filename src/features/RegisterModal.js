import RegisterForm from './RegisterForm';
import logo from '../asset/logo/match.png';
import Modal, { ModalHeader } from '../reuseComponent/Modal';

export default function RegisterModal({ isRegisterShow, handleCloseRegister }) {
  return (
    <>
      <Modal
        show={isRegisterShow}
      >
    <ModalHeader onClose={handleCloseRegister}>
    </ModalHeader>
          <div className="flex justify-center">
            <img className="h-20 w-20 mb-3" src={logo}></img>
          </div>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>

            <RegisterForm />
          </div>
      </Modal>
    </>
  );
}
