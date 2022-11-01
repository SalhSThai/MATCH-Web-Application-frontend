import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchInterest, interest } from "../../redux/Slice/IntetrestSlice";

import InterestShow from "./InterestShow";

function InterestBody() {
  const interest = useSelector((state) => state.interest);
  const dispatch = useDispatch();
  console.log(interest);

  useEffect(() => {
    dispatch(thunkFetchInterest());
    //   console.log(interest);
  }, []);

  // const initialInterest = {
  //   icon: '',
  //   text: ''
  // };
  return (
    <div className=" w-full h-full text-black overflow-y-scroll scrollbar-hide">
      <div className="w-full gap-1.5 h-[40px] text-center flex flex-wrap mt-10">
        {interest.allInterest?.map?.((items, index) => (
          <InterestShow key={index} title={items.text} icon={items.icon} />
        ))}
      </div>
    </div>
  );
}
export default InterestBody;

// {state.allInterest.map((items, index) => (
//   <>
//     <button
//       key={index}
//       name={items.text}
//       className={`border-4 rounded-xl bg-white py-2 px-2 font-semibold ${
//         active === items.text
//           ? ' border-[#ed663e] bg-[#ed663e] text-white'
//           : ' text-gray-400  '
//       } `}
//       onClick={() => setActive(items.text)}
//     >
//       <div className="w-full h-[50px] flex flex-wrap items-center justify-start gap-2">
//         <div className="h-[50px] ">
//           <img
//             src={items.icon}
//             alt="icon"
//             className="w-auto h-[50px]"
//           />
//         </div>
//         {items.text}
//       </div>
//     </button>
//   </>
// ))}
