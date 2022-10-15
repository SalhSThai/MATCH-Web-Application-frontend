import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function AuthContainer() {
  const [isRegisterShow, setIsRegisteShow] = useState(false);

  const handleClickRegister = (e) => setIsRegisteShow(true);
  const handleCloseRegister = (e) => setIsRegisteShow(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-1/4">
        <Button>Fackbook</Button>
      </div>
      <LoginModal
        isRegisterShow={isRegisterShow}
        handleCloseRegister={handleCloseRegister}
        handleClickRegister={handleClickRegister}
      />

      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{' '}
        <span
          className="text-blue-700 hover:underline dark:text-blue-500"
          onClick={handleClickRegister}
        >
          Create account
        </span>
        <RegisterModal
          isRegisterShow={isRegisterShow}
          handleClickRegister={handleClickRegister}
          handleCloseRegister={handleCloseRegister}
        />
      </div>
    </div>
  );
}

export default AuthContainer;
