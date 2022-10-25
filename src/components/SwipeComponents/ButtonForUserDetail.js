import { MoreUesrDetailIcon } from '../../asset/iconForSwipePage.js/IconOnProfile';

export default function ButtonForUserDetail({ handleClickUserDetail }) {
  return (
    <button
      type='button'
      className='h-fit rounded-full cursor-pointer z-[1] hover:bg-slate-500'
      onClick={handleClickUserDetail}
    >
      <MoreUesrDetailIcon />
    </button>
  );
}
