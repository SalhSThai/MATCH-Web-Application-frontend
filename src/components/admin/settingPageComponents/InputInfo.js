function InputInfo({ userInfo = {}, handleChangeInput }) {
  return (
    <div className='flex flex-col gap-5 w-full p-1 justify-center items-center '>
      <div>
        <div className='mb-1 block'>
          <label className='text-slate-300 text-xl' htmlFor='small'>
            First Name
          </label>
        </div>
        <input
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#26263e] text-white text-[30px] px-5'
          id='small'
          type='text'
          sizing='sm'
          name='firstName'
          value={userInfo?.firstName ?? ''}
          placeholder='First Name'
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className='mb-1 block'>
          <label className='text-slate-300 text-xl' htmlFor='small'>
            Last Name
          </label>
        </div>
        <input
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#26263e] text-white text-[30px] px-5'
          id='small'
          type='text'
          sizing='sm'
          name='lastName'
          value={userInfo.lastName ?? ''}
          placeholder='Last Name'
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className='mb-1 block'>
          <label className='text-slate-300 text-xl' htmlFor='email'>
            Email
          </label>
        </div>
        <input
          className='border border-1 border-slate-500 rounded-xl p-3 bg-[#26263e] text-white text-[30px] px-5'
          id='email'
          type='text'
          placeholder='Email'
          sizing='sm'
          name='email'
          value={userInfo.email ?? ''}
          onChange={handleChangeInput}
        />
      </div>
      <div className='flex justify-between mt-2'></div>
    </div>
  );
}

export default InputInfo;
