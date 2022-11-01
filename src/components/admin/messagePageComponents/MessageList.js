import MessageCard from './MessageCard';

export default function MessageList() {
  return (
    <div className='flex flex-col py-3'>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </div>
  );
}
