import InterestHeader from '../../components/admin/interestPageComponents/InterestHeader';
import InterestList from '../../components/admin/interestPageComponents/InterestList';

export default function InterestPageAdmin() {
  return (
    <div className='flex flex-col gap-5'>
      <InterestHeader />
      <InterestList />
    </div>
  );
}
