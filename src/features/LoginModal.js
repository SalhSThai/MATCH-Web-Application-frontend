import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterModal from './RegisterModal';
// import styled from 'styled-components';

// const LoginModalStyle = styled`

// span{

// }
// `

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
      <Button color='light' onClick={handleClick}>
        Sign in with password
      </Button>
      <Modal show={isLoginShow} size='md' popup={true} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Log in
            </h3>

            <LoginForm />

            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Not registered?{' '}
              <span
                className='text-blue-700 hover:underline dark:text-blue-500'
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
