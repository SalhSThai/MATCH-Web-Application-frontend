import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkUpdateLocation } from '../../redux/Slice/LocationSlice';
import Button from '../../reuseComponent/Button';
import LocationIcon from '../../reuseComponent/LocationIcon';

export default function NearMeButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickButton = (e) => {
    navigate('/nearme');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // console.log(position);
        console.log('latitude: ', latitude, 'longitude: ', longitude);
        dispatch(thunkUpdateLocation({ latitude, longitude }));
      },
      () => null
    );
  };

  return (
    <div onClick={handleClickButton}>
      <Button>
        Near Me
        <div className='pl-2'>
          <LocationIcon fill='white' width='15' height='20' />
        </div>
      </Button>
    </div>
  );
}
