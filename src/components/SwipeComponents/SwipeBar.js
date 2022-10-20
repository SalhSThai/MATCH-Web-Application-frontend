import {
  LikeIcon,
  RejectIcon,
  SuperLikeIcon
} from '../../asset/iconForSwipePage.js/IconOnProfile';

export default function SwipeBar() {
  return (
    <div className='relative pb-10'>
      <div className='absolute flex justify-center gap-10 w-full items-end -translate-y-10'>
        <div
          role='button'
          className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center'
        >
          <RejectIcon />
        </div>
        <div
          role='button'
          className='bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center'
        >
          <SuperLikeIcon />
        </div>
        <div
          role='button'
          className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center'
        >
          <LikeIcon />
        </div>
      </div>
    </div>
  );
}
