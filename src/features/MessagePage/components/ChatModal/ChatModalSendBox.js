import React, { useState } from 'react'
import Send from '../../../../asset/IconChatRoom/Send'

export default function ChatModalSendBox(props) {
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(p=>'')
    }

    return (<div className='w-full h-[80px] shadow-[4px_0_4px_4px_rgba(0,0,0,0.1)]  p-3 z-[1]'>
        <form className='w-full h-full bg-white p-1 flex justify-evenly items-center' onSubmit={handleSubmit}>
            <div className='relative h-full grow'>
                <input
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    type='text'
                    placeholder='Aa'
                    className="w-full text-lg border-black  rounded-3xl text-gray-900 focus:z-[1] focus:border-blue-500 focus:shadow-[0_4px_4px_4px_rgba(117,99,253,0.1)] focus:ring-blue-500 " />
                <Send className='absolute h-6 w-6 right-0 top-[50%] -translate-x-[50%] -translate-y-[50%]' onClick={handleSubmit} />
            </div>
        </form>
    </div>)
}
