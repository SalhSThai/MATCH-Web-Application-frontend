import React from 'react'
import SendIcon from '../../asset/logo/SendIcon'

export default function SendBoxChatRoom(props) {
    const {handleMessage,recentMessage ,sendMessage} = props

    return (<div className='h-[50px] w-full'>
        <form className='h-full  w-auto bg-slate-100 rounded-xl mx-10 my-3 p-3 flex justify-between items-center ' onSubmit={sendMessage} >
            <input type="text" className=' border-none bg-transparent focus:border-none focus:ring-0 flex-grow ' placeholder='Message...' value={recentMessage} onChange={handleMessage}/>
            <SendIcon onClick={sendMessage} />
        </form>
    </div>)

}
