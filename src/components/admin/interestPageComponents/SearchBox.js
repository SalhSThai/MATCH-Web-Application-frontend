import { SearchIcon } from '../../../asset/Icon/IconForAdminInterestPage';

export default function SearchBox() {
  return (
    <div className='flex border-[0.5px] border-slate-500 rounded-lg'>
      <input
        type='text'
        className='px-4 py-2 w-80 rounded-l-lg bg-[#26263E] text-white'
        placeholder='Search...'
      />
      <button className='flex items-center justify-center px-4 border-l bg-[#565D96]'>
        <SearchIcon />
      </button>
    </div>
  );
}
