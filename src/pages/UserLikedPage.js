import UserCard from '../features/LikeMe/UserCard';

export default function UserLikedPage() {
  return (
    <div className='grid grid-cols-2 grid-flow-row gap-3 p-3 max-h-full overflow-y-scroll scrollbar-hide'>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
