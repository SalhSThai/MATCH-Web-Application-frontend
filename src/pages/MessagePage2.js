import ChatApplication from '../features/MessagePage/ChatApplication';
import SlidingMatch from '../features/MessagePage/SlidingMatch';

export default function MessagePage(props) {
  return (
    <div className=' w-full h-full  flex  flex-col '>
      <SlidingMatch /> 
      <ChatApplication />
    </div>
  );
}
