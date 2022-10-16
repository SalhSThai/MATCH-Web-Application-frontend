import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterModal from './RegisterModal';
import logo from '../asset/logo/match.png';
import styled from 'styled-components';
import Modal, { ModalHeader } from '../reuseComponent/Modal';
import Button from '../reuseComponent/Button';

const CustomModal = styled(Modal)`
height: 100%;
background-color: black !important;
`

export default function LoginModal({
  isRegisterShow,
  handleCloseRegister,
  handleClickRegister
}) {
  const [isLoginShow, setIsLoginShow] = useState(false);

  const handleClick = (e) => setIsLoginShow(true);
  const handleClose = (e) => setIsLoginShow(false);

  return (
    <div>
        <Button
          onClick={handleClick}
        >
          Sign in with password
        </Button>
      
      <Modal show={isLoginShow}  onClose={handleClose} >
      <ModalHeader onClose={handleClose} />
      <div className='fixed top-0 h-full w-full flex flex-col justify-center'>
      <div className="flex justify-center">
        <img className="h-20 w-20 " src={logo}></img>
      </div>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Log in
        </h3>

        <LoginForm />

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <span
            className="text-blue-700 hover:underline dark:text-blue-500"
            onClick={handleClickRegister}
          >
            Create account
          </span>
        </div>
        <RegisterModal
          isRegisterShow={isRegisterShow}
          handleCloseRegister={handleCloseRegister}
        />
      </div>
      </div>
      </Modal>
    </div>
  );
}
