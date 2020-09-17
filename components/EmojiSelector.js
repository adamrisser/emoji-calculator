import React from 'react';
import EmojiBox from './EmojiBox';

const EmojiSelector = ({ emojis, addValue, title }) => {
  return (
    <fieldset
      className="border-2 text-white inline-flex m-2"
      style={{ borderWidth: '1px' }}
    >
      <legend className="text-xs" style={{ marginLeft: '20px' }}>
        {title}
      </legend>
      <div className="inline-flex flex-row justify-start flex-wrap flex-shrink-0">
        {emojis.map((v) => (
          <EmojiBox key={v} addValue={addValue}>
            {v}
          </EmojiBox>
        ))}
      </div>
    </fieldset>
  );
};

export default EmojiSelector;
