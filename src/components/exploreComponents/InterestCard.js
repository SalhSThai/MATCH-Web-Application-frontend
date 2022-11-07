export default function InterestCard({ text, icon, description }) {
  return (
    <div className="w-48 h-56 bg-[#29437E] bg-opacity-50 rounded-xl flex flex-col justify-between cursor-pointer">
      <div
        className="rounded-t-xl h-full bg-cover"
        style={{
          backgroundImage: `url('${icon}')`
        }}
      ></div>
      <div className="py-1 justify-between items-center align-middle">
        <div className="text-white text-2xl font-mali">{text}</div>
        <div className="text-white text-xl">{description}</div>
      </div>
    </div>
    // <div className="relative flex h-56">
    //   <div className="absolute bottom-0 p-3">
    //     <div className="text- font-bold">{description}</div>
    //     <div className="text-">Passion</div>
    //   </div>
    //   <div className="absolute p-3 ">
    //     <div className=" text-white font-bold bg-orange-400 rounded-2xl flex justify-center py-1 px-2">
    //       {text}
    //     </div>
    //   </div>
    //   <img className="rounded-2xl" src={icon} alt="user card" />
    // </div>
  );
}
