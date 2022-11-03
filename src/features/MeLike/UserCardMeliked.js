import lisa from '../../../src/asset/profileUser/lisa.png';

export default function UserCardMeliked({ items }) {
  return (
    <div className="relative flex  ">
      <div className="absolute bottom-0 p-3">
        <div className="text-red-500 font-bold">
          {items?.swipesecondId?.username}, Agedddddd
        </div>
        <div className="text-white ">Status</div>
      </div>
      <div>
      <img
        className="rounded-2xl h-full  "
        src={items?.swipesecondId?.profileImage}
        alt="user card"
      />
      </div>
    </div>
  );
}
