import React, { useState } from 'react';
import SendIcon from '../../asset/logo/SendIcon';

export default function SendBoxChatRoom(props) {
  const { sendMessage } = props;
  const [recentMessage, setRecentMessage] = useState('');
  const handleMessage = (e) => {
    setRecentMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(recentMessage)
  }

  return (
    <div className="h-[50px] w-full">
      <form
        className="h-full  w-auto bg-slate-100 rounded-xl mx-10 my-3 p-3 flex justify-between items-center "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" border-none bg-transparent focus:border-none focus:ring-0 flex-grow "
          placeholder="Message..."
          value={recentMessage}
          onChange={handleMessage}
        />
        <SendIcon onClick={handleSubmit} />
      </form>
    </div>
  );
}
