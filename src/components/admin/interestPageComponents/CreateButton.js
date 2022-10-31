import { AddIcon } from '../../../asset/Icon/IconForAdminInterestPage';

export default function CreateButton() {
  return (
    <div className='flex border-2 border-match-dark rounded-lg'>
      <button className='flex items-center justify-center bg-match-dark px-4 py-2 text-white gap-2'>
        <AddIcon />
        <div>Create</div>
      </button>
    </div>
  );
}
