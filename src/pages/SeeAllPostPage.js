import React from 'react';
import SeeAllPostContainer from '../components/SeeAllPostWithMatching/SeeAllPostContainer';

function SeeAllPostPage() {
  return (
    <>
      <div className="max-h-full overflow-y-scroll scrollbar-hide">
        <SeeAllPostContainer />
      </div>
    </>
  );
}

export default SeeAllPostPage;
