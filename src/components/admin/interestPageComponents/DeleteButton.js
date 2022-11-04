import { useDispatch } from 'react-redux';
import { thunkDeleteInterest } from '../../../redux/Slice/IntetrestSlice';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();

  const handleClickDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteInterest(id));
  };

  return (
    <div role='button' onClick={handleClickDelete}>
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
  );
}
