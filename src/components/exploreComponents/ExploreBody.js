import React, { useEffect } from 'react';
import InterestCard from './InterestCard';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchInterest } from '../../redux/Slice/IntetrestSlice';
import { Link } from 'react-router-dom';

function ExploreBody() {
  const interest = useSelector((state) => state.interest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchInterest());
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row gap-3 p-3 ">
        {interest.allInterest?.map?.((items, index) => (
          <Link to="/">
            <button type="button">
              <InterestCard key={index} text={items.text} icon={items.icon} />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ExploreBody;
