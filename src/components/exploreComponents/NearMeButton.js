import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../reuseComponent/Button';
import LocationIcon from '../../reuseComponent/LocationIcon';

export default function NearMeButton() {
  const navigate = useNavigate();

  const handleClickButton = (e) => {
    navigate('/nearme');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
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
