export default function UserCardMeliked({ items }) {
  return (
    <div className="relative flex  ">
      <div className="absolute bottom-0 p-3">
        <div className="text-green-300 font-bold">
          {items?.swipesecondId?.username}, Agedddddd
        </div>
        <div className="text-green-300  font-bold ">Status</div>
      </div>
      <img
        className="rounded-2xl h-full  "
        src={items?.swipesecondId?.profileImage}
        alt="user card"
      />
    </div>
  );
}
