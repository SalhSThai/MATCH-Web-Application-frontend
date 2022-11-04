import NewAccountThisMonth from './NewAccountThisMonth';
import NewAccountThisWeek from './NewAccountThisWeek';

export default function NewAccountStatusContainer() {
  return (
    <div className='py-10 flex flex-col gap-5'>
      <div className='text-white'>New account</div>
      <div className='flex gap-10'>
        <NewAccountThisWeek />
        <NewAccountThisMonth />
      </div>
    </div>
  );
}
