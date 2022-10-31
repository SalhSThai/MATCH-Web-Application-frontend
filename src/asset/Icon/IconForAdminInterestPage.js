function SearchIcon() {
  return (
    <svg
      className='w-6 h-6 text-gray-600'
      fill='#bababa'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
    </svg>
  );
}
function AddIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 2C12.3008 2.04463 8.76575 3.53395 6.14985 6.14985C3.53395 8.76575 2.04463 12.3008 2 16C2.04463 19.6992 3.53395 23.2343 6.14985 25.8501C8.76575 28.466 12.3008 29.9554 16 30C19.6992 29.9554 23.2343 28.466 25.8501 25.8501C28.466 23.2343 29.9554 19.6992 30 16C29.9554 12.3008 28.466 8.76575 25.8501 6.14985C23.2343 3.53395 19.6992 2.04463 16 2V2ZM24 17H17V24H15V17H8V15H15V8H17V15H24V17Z'
        fill='white'
      />
    </svg>
  );
}

export { SearchIcon, AddIcon };
