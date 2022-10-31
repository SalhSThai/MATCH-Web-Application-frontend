import GenderFemale from './GenderFemale';
import GenderMale from './GenderMale';
import GenderOther from './GenderOther';

export default function GenderStatusContainer() {
  return (
    <div className='pt-10 flex flex-col gap-5'>
      <div className='text-white'>Gender</div>
      <div className='flex gap-10'>
        <GenderMale />
        <GenderFemale />
        <GenderOther />
      </div>
    </div>
  );
}
