import LocationIcon from '../../reuseComponent/LocationIcon';

export default function ContentBox() {
  return (
    <div className='flex flex-col justify-center h-20 mt-10 mx-5 px-5 bg-white rounded-xl gap-2'>
      <div className='flex gap-1'>
        <LocationIcon fill='#ED663E' width='23' height='25' />
        <div className='font-semibold text-lg'>People near me</div>
      </div>
      <div className='text-sm px-3'>Within 10 kms.</div>
    </div>
  );
}
