import React from 'react';
import XMask from '../asset/logo/XMask';
export default function Modal(props) {
  const { children, className, show } = props;
  return (
    <div
      className={`h-full w-full fixed top-0 left-0 bg-white ${ show ? ' block ' : ' hidden ' } ${className}`}
    >
      {children}
    </div>
  );
}

 function ModalHeader(props) {
  const { children ,onClose,line} = props;
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex justify-between  items-center p-10 ">
        {children}
        <XMask  onClick={onClose} />
      </div>

      <div className={`w-full ${ line ? ' block ' : ' hidden ' }`}  style={{borderTop: "1px solid rgba(0, 0, 0, 0.1)"}}/>
    </div>
  );
}

export {ModalHeader}