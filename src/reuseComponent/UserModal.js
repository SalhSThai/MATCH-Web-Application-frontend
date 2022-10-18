import React from 'react';
export default function UserModal(props) {
  const { children, className, show } = props;
  return (
    <div
      className={`h-full w-full fixed top-0 left-0 bg-white z-[2] ${
        show ? ' block ' : ' hidden '
      } ${className}`}
    >
      {children}
    </div>
  );
}
