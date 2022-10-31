import InterestCard from '../../../components/admin/interestPageComponents/InterestCard';

export default function InterestList() {
  return (
    <div className='py-5 grid grid-flow-row grid-cols-5 gap-10'>
      <InterestCard />
      <InterestCard />
      <InterestCard />
      <InterestCard />
      <InterestCard />
      <InterestCard />
      <InterestCard />
    </div>
  );
}
