import React from 'react';
import EmojiBox from './EmojiBox';

const ZeroWidthSelector = ({ addValue }) => {
  return (
    <div className="flex justify-start">
      <div className="text-gray-100 text-center px-4 py-2 m-2 rounded-lg ">
        ZeroWidthSelector
      </div>

      <EmojiBox addValue={() => addValue('\u{200D}')}>🔴</EmojiBox>
    </div>
  );
};

export default ZeroWidthSelector;
