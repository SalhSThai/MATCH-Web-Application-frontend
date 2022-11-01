export default function EditinfoContainer({ handleCloseInterestCard }) {
  return (
    <div className='p-10 relative w-[50%]'>
      <div
        role='button'
        className='absolute top-8 right-8 cursor-pointer'
        onClick={handleCloseInterestCard}
      >
        <svg
          width='70'
          height='67'
          viewBox='0 0 70 67'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='70' height='67' rx='20' fill='#717BCB' />
          <path
            d='M34.9997 48.1666C33.1388 48.1685 31.2957 47.8033 29.5761 47.092C27.8565 46.3808 26.294 45.3373 24.9782 44.0214C23.6623 42.7056 22.6189 41.1431 21.9076 39.4235C21.1963 37.7039 20.8312 35.8609 20.833 33.9999V33.7166C20.8897 30.9391 21.7613 28.2395 23.3396 25.9533C24.9179 23.6671 27.1333 21.8951 29.7104 20.8576C32.2874 19.8201 35.1126 19.5628 37.8347 20.1176C40.5568 20.6725 43.0558 22.015 45.0212 23.9784C47.0041 25.9597 48.3547 28.4847 48.902 31.2339C49.4493 33.983 49.1687 36.8328 48.0958 39.4224C47.0229 42.0121 45.2058 44.2252 42.8746 45.7817C40.5434 47.3383 37.8028 48.1683 34.9997 48.1666V48.1666ZM34.9997 35.9974L38.6688 39.6666L40.6663 37.6691L36.9972 33.9999L40.6663 30.3308L38.6688 28.3333L34.9997 32.0024L31.3305 28.3333L29.333 30.3308L33.0022 33.9999L29.333 37.6691L31.3305 39.6666L34.9997 35.9989V35.9974Z'
            fill='white'
          />
        </svg>
      </div>
      <div className='flex justify-center items-center w-full pt-[2%] h-full'>
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
          <br />
          <br />
          <div className='w-full flex justify-center items-center gap-20'>
            <div role='button'>
              <svg
                width='70'
                height='67'
                viewBox='0 0 70 67'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='70' height='67' rx='20' fill='#DD2E44' />
                <path
                  d='M25 50H45L47 28H23L25 50ZM39 22V18H31V22H21V28L23 26H47L49 28V22H39ZM37 22H33V20H37V22Z'
                  fill='white'
                />
              </svg>
            </div>
            <div role='button'>
              <svg
                width='70'
                height='67'
                viewBox='0 0 70 67'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='70' height='67' rx='20' fill='#1DC273' />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M20 34C20 30.0218 21.5804 26.2064 24.3934 23.3934C27.2064 20.5804 31.0218 19 35 19C38.9782 19 42.7936 20.5804 45.6066 23.3934C48.4196 26.2064 50 30.0218 50 34C50 37.9782 48.4196 41.7936 45.6066 44.6066C42.7936 47.4196 38.9782 49 35 49C31.0218 49 27.2064 47.4196 24.3934 44.6066C21.5804 41.7936 20 37.9782 20 34V34ZM34.144 40.42L42.78 29.624L41.22 28.376L33.856 37.578L28.64 33.232L27.36 34.768L34.144 40.422V40.42Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
