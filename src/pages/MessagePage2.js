import ChatApplication from '../features/MessagePage/ChatApplication';
import SlidingMatch from '../features/MessagePage/SlidingMatch';

export default function MessagePage(props) {


  return (
    <div className='relative w-full h-full flex-col flex  '>
      <SlidingMatch />
      <ChatApplication /> 
    </div>
  )
}
