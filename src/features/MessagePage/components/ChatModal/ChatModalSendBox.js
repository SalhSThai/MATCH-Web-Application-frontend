import React, { useState } from 'react';
import Send from '../../../../asset/Icon/IconSend';

export default function ChatModalSendBox(props) {
  const { sendMessageFn } = props;
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageFn(message);
    setMessage((p) => '');
  };

  return (
    <form
      className='fixed bottom-0 left-0 right-0 min-h-[10%] bg-white flex justify-evenly items-center shadow-[4px_0_4px_4px_rgba(0,0,0,0.1)]  p-3 z-[1]'
      onSubmit={handleSubmit}
    >
      <div className='relative h-full grow'>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type='text'
          placeholder='Aa'
          className='w-full text-lg border-black  rounded-3xl text-gray-900  focus:border-blue-500  focus:ring-blue-500 '
        />
        <Send
          className='absolute h-6 w-6 right-0 top-[50%] -translate-x-[50%] -translate-y-[50%]'
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
