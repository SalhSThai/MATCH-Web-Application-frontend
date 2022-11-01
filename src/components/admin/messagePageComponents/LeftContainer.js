import MessageList from './MessageList';
import SearchBox from './SearchBox';

export default function LeftContainer() {
  return (
    <div className='border-r-[0.5px] border-slate-500'>
      <div className='py-4'>
        <SearchBox />
        <MessageList />
      </div>
    </div>
  );
}
