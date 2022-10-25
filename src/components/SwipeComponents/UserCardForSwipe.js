import React from 'react';
import UserDescriptionContainer from './UserDescriptionContainer';
import iu from '../../asset/profileUser/iu.png';

import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

export default function UserCardForSwipe({
  handleClickUserDetail,
  handleCloseUserDetail,
  isProfileShow
}) {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement: [mx], velocity: [vx] }) => {
    const trigger = vx > 0.2;
    api.start({ x: down ? mx : 0, immediate: down });
  });

  return (
    <animated.div
      className='rounded-3xl relative cursor-pointer'
      {...bind()}
      style={{ x }}
    >
      <UserDescriptionContainer
        handleClickUserDetail={handleClickUserDetail}
        handleCloseUserDetail={handleCloseUserDetail}
        isProfileShow={isProfileShow}
      />
      <img
        className='rounded-2xl -z-40'
        src={iu}
        alt='user card'
        draggable='false'
      />
    </animated.div>
  );
}
