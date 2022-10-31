import {
  LikeIcon,
  RejectIcon,
  SuperLikeIcon
} from '../../asset/Icon/IconForSwipePage';

export default function SwipeBar() {
  return (
    <div className='absolute bottom-0 w-full z-[3] h-[100px]  bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]'>
      <div className=' flex justify-center gap-10 w-full items-end'>
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
