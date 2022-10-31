export default function InterestCard({ text, icon }) {
  return (
    <div className="relative flex h-56">
      <div className="absolute bottom-0 p-3">
        <div className="text-red-700 font-bold">Description</div>
        <div className="text-red-700">Passion</div>
      </div>
      <div className="absolute p-3 ">
        <div className=" text-white font-bold bg-orange-400 rounded-2xl flex justify-center py-1 px-2">
          {text}
        </div>
      </div>
      <img className="rounded-2xl" src={icon} alt="user card" />
    </div>
  );
}
