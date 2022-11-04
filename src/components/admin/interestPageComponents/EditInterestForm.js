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
  setIconInput,
  handleChangeInput,
  id
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
        id='title'
        name='title'
        value={title}
        onChange={handleChangeInput}
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
        {iconInput ? (
          <img
            src={URL.createObjectURL(iconInput)}
            alt='icon'
            className='rounded-xl mt-3 text-xs'
          />
        ) : icon ? (
          <img src={icon} alt='icon' className='rounded-xl mt-3 text-xs' />
        ) : (
          <AddIcon />
        )}
        <input
          type='file'
          name='icon'
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
        id='description'
        name='description'
        value={description}
        onChange={handleChangeInput}
        className='border-1 border-slate-500 rounded-xl p-3 bg-[#29437E] text-white text-[20px] w-[100%] h-40 resize-none'
      />
      <div className='w-full flex justify-center items-center gap-20 pt-16'>
        <DeleteButton id={id} />
        <SubmitButton />
      </div>
    </div>
  );
}
