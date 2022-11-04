import React from 'react';
import MatchedStatus from './MatchedStatus';
import OnlineStatus from './OnlineStatus';
import PeopleJoinStatus from './PeopleJoinStatus';

export default function StatusContainer() {
  return (
    <div className='bg-[#29437E] flex justify-between rounded-xl w-[80%]'>
      <PeopleJoinStatus />
      <MatchedStatus />
      <OnlineStatus />
    </div>
  );
}
