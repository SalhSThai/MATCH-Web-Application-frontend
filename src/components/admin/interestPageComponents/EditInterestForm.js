import { useState } from 'react';
import { useRef } from 'react';
import { AddIcon } from '../../../asset/Icon/IconForAdminInterestPage';
import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

export default function EditInterestForm({
  title,
  icon,
  description,
  iconInput,
  setIconInput
}) {
  const inputEl = useRef();

  console.log('iconInput', iconInput);

  return (
    <div className='flex flex-col justify-center h-full p-12 w-[50%]'>
      <label for='interestName' className='text-white text-xl py-2'>
        Interest name
      </label>
      <input
        type='text'
        id='interestName'
        name='interestName'
        value={title}
        className='border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[50px] w-[80%] px-5'
      />
      <br />
      <label for='interestIcon' className='text-white text-xl py-2'>
        Interest icon
      </label>
      <div
        className='cursor-pointer border border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[50px] w-20 h-20 flex justify-center items-center'
        onClick={() => inputEl.current.click()}
      >
        {icon ? (
          iconInput ? (
            <img
              src={URL.createObjectURL(iconInput)}
              alt='icon'
              className='rounded-xl mt-3 text-xs'
            />
          ) : (
            <img src={icon} alt='icon' className='rounded-xl mt-3 text-xs' />
          )
        ) : (
          <AddIcon />
        )}
        <input
          type='file'
          name='interestIcon'
          ref={inputEl}
          className='hidden'
          onChange={(e) => {
            if (e.target.files[0]) {
              setIconInput(e.target.files[0]);
            }
          }}
        />
      </div>
      <br />
      <label for='interestDescription' className='text-white text-xl py-2'>
        Interest description
      </label>
      <textarea
        type='text'
        id='interestDescription'
        name='interestDescription'
        value={description}
        className='border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[20px] w-[100%] h-40 resize-none'
      />
      <div className='w-full flex justify-center items-center gap-20 pt-16'>
        <DeleteButton />
        <SubmitButton />
      </div>
    </div>
  );
}
