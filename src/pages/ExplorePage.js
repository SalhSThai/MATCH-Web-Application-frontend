import InterestCard from '../features/Explore/InterestCard';

export default function ExplorePage() {
  return (
    <>
      <div className='self-start px-5 py-2 font-semibold'>Suggest for you</div>
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
