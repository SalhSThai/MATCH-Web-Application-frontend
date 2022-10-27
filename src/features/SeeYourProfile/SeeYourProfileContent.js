import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import { CommentIcon, LikeIcon } from '../../asset/SeeYourProfile/Icon';
import SeeYourProfileFooter from './SeeYourProfileFooter';
import ShowMoreText from 'react-show-more-text';
import iu from '../../asset/profileUser/iu1.jpg';

function SeeYourProfileContent() {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <div className=" border border-groove">
      <div className="flex gap-3 items-center mt-2 py-2 px-3">
        <Avatar rounded={true} />
        <div>OTHER USERNAME</div>
      </div>
      <div className="bg-[#ff99e0] w-full  mt-3 py-3 px-2 ">
        <ShowMoreText
          className="text-xs font-mali"
          lines={2}
          more={'Show More'}
          less={'Show Less'}
          onClick={onClick}
          expanded={expand}
          width={400}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit
          natus eligendi veniam et nobis quidem ratione tempore, laboriosam
          voluptatum quos, quibusdam omnis error minus placeat tempora illo
          expedita adipisci?
        </ShowMoreText>
      </div>
      <img src={iu} />
      <div className="flex justify-between items-center mx-7 border-b-2">
        <button type="button">
          <div className="mt-2 mb-2">...Like</div>
        </button>
        <button type="button">
          <div className="mt-2 mb-2">...Comments</div>
        </button>
      </div>
      <div className="flex justify-around mt-3 mb-3">
        <button type="button">
          <LikeIcon />
        </button>
        <button type="button">
          <CommentIcon />
        </button>
      </div>
      <div className="border border-groove">
        <SeeYourProfileFooter />
      </div>
    </div>
  );
}

export default SeeYourProfileContent;
