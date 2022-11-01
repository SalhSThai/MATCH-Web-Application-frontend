import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

export default function EditInterestForm() {
  return (
    <div className='flex justify-center items-center h-full p-12 w-[50%]'>
      <form className='flex flex-col'>
        <label for='interestName' className='text-white text-xl py-2'>
          Interest name
        </label>
        <input
          type='text'
          id='interestName'
          name='interestName'
          value='Archery'
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[50px] w-[80%] px-5'
        />
        <br />
        <label for='interestIcon' className='text-white text-xl py-2'>
          Interest icon
        </label>
        <input
          type='file'
          id='interestIcon'
          name='interestIcon'
          // value=''
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[30px] w-[20%] px-5'
        />
        <br />
        <label for='interestDescription' className='text-white text-xl py-2'>
          Interest description
        </label>
        <textarea
          type='text'
          id='interestDescription'
          name='interestDescription'
          // value=''
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[20px] w-[100%] h-40 resize-none'
        />
        <div className='w-full flex justify-center items-center gap-20 pt-16'>
          <DeleteButton />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
