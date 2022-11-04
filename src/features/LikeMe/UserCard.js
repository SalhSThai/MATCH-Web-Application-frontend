import lisa from '../../../src/asset/profileUser/lisa.png';

export default function UserCard({ items }) {
  return (
    <div className="relative flex h-full w-full">
      <div className="absolute bottom-0 p-3">
        <div className="text-green-300 font-bold">
          {items?.swipefirstId?.username} , Age
        </div>
        <div className="text-green-300 font-bold">Status</div>
      </div>
      <img
        className="rounded-2xl"
        src={items?.swipefirstId?.profileImage}
        alt="user card"
      />
    </div>
  );
}
