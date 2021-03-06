import React, { useState } from 'react';
import Head from 'next/head';
import EmojiSelector from '../components/EmojiSelector';
import emojiUnicode from 'emoji-unicode';
import {
  animals,
  objects,
  activities,
  smiles,
  symbols,
  travel,
  food,
  fitzpatrickScale,
  hands,
  generic,
  hair,
} from '../emojis';
import ButtonDisplay from '../components/ButtonDisplay';

export default function Home() {
  const [display, setDisplay] = useState([]);
  const [computed, setComputed] = useState([]);
  const addValue = (v) => setDisplay([...display, v]);

  return (
    <main>
      <Head>
        <title>Em🧐ji Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-4xl text-center pb-8 text-white">
          Em🧐ji Calculator
        </h1>

        <ButtonDisplay
          onClick={() => {
            setDisplay([]);
            setComputed('');
          }}
          buttonText="🔄"
          id="display"
        >
          {display.map((d, i) =>
            d === '\u200D' ? (
              <span style={{ color: 'red' }} key={i}>
                &nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ) : (
              d + ' '
            )
          )}
        </ButtonDisplay>

        <ButtonDisplay onClick={() => addValue('\u{200D}')} buttonText="+">
          {display.map((d) => '\\u' + emojiUnicode(d)).join('')}
        </ButtonDisplay>

        <ButtonDisplay
          height="h-40"
          textSize="text-6xl"
          onClick={() => setComputed(display.join(''))}
          buttonText="↩"
          id="sum"
        >
          {computed}
        </ButtonDisplay>

        <EmojiSelector addValue={addValue} emojis={smiles} title="People" />
        <EmojiSelector addValue={addValue} emojis={generic} title="Generic" />
        <EmojiSelector addValue={addValue} emojis={hands} title="Hands" />

        <EmojiSelector
          addValue={addValue}
          emojis={fitzpatrickScale}
          title="Skin tones"
        />

        <EmojiSelector addValue={addValue} emojis={hair} title="Hair" />

        <EmojiSelector addValue={addValue} emojis={animals} title="Animals" />

        <EmojiSelector addValue={addValue} emojis={objects} title="Objects" />
        <EmojiSelector addValue={addValue} emojis={food} title="Food" />
        <EmojiSelector addValue={addValue} emojis={symbols} title="Symbols" />
        <EmojiSelector
          addValue={addValue}
          emojis={activities}
          title="Activities"
        />
        <EmojiSelector addValue={addValue} emojis={travel} title="Travel" />
      </div>
    </main>
  );
}
