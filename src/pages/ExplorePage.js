import InterestCard from '../components/exploreComponents/InterestCard';
import NearMeButton from '../components/exploreComponents/NearMeButton';

export default function ExplorePage() {
  return (
    <>
      <div className='flex justify-between w-full px-5'>
        <div className='py-2 font-semibold'>Suggest for you</div>
        <NearMeButton />
      </div>
      <div className='grid grid-cols-2 grid-flow-row gap-3 p-3 max-h-full overflow-y-scroll scrollbar-hide'>
        <InterestCard />
        <InterestCard />
        <InterestCard />
        <InterestCard />
        <InterestCard />
        <InterestCard />
        <InterestCard />
        <InterestCard />
      </div>
    </>
  );
}
