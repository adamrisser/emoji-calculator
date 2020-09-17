import React from 'react';

const EmojiBox = ({ children, addValue }) => {
  return (
    <div
      className="text-gray-700 text-center bg-gray-100 px-4 py-2 m-2 rounded-lg cursor-pointer"
      key={children}
      onClick={() => addValue(children)}
    >
      <div style={{ transform: 'translateX(-2px)' }}>{children}</div>
    </div>
  );
};

export default EmojiBox;
