import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InterestCard from '../../../components/admin/interestPageComponents/InterestCard';
import { thunkFetchInterest } from '../../../redux/Slice/IntetrestSlice';

export default function InterestList({ id }) {
  const interest = useSelector((state) => state.interest);
  const dispatch = useDispatch();
  console.log('interest', interest);

  useEffect(() => {
    dispatch(thunkFetchInterest());
  }, []);

  return (
    <div className='py-5 grid grid-flow-row grid-cols-5 gap-10'>
      {interest.allInterest?.map?.((items, index) => (
        <InterestCard
          key={index}
          id={items.id}
          title={items.text}
          icon={items.icon}
          interestImage={items.interestImage}
          description={items.description}
        />
      ))}
    </div>
  );
}
