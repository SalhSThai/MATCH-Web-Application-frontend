import React from 'react';
import UserPostBody from '../features/UserPost/UserPostBody';
import UserPostHeader from '../features/UserPost/UserPostHeader';

function UserPostPage() {
  return (
    <div className="max-h-full overflow-y-scroll scrollbar-hide">
      <UserPostHeader />
      <UserPostBody />
    </div>
  );
}

export default UserPostPage;
