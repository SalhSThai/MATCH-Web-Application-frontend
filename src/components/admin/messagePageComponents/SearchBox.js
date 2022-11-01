import { SearchIcon } from '../../../asset/Icon/IconForAdminMessagePage';

export default function SearchBox() {
  return (
    <div className='flex border-[0.5px] border-slate-500 rounded-xl mx-5'>
      <div className='flex justify-center items-center px-2'>
        <SearchIcon />
      </div>
      <input
        type='text'
        className='px-4 py-2 w-80 bg-[#29437E] text-white border-none  rounded-xl'
        placeholder='Search...'
      />
    </div>
  );
}
