import CreateButton from './CreateButton';
import SearchBox from './SearchBox';

export default function InterestHeader() {
  return (
    <div className='flex justify-between'>
      <div className='text-white text-[40px]'>Interest</div>
      <div className='flex items-center gap-8'>
        <SearchBox />
        <CreateButton />
      </div>
    </div>
  );
}
