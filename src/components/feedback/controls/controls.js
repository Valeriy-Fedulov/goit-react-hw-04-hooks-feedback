import React from 'react';

const Controls = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => (
  <>
    <h2>Please leave feedback</h2>
    <button
      type="button"
      onClick={() => {
        onGoodIncrement();
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        onNeutralIncrement();
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        onBadIncrement();
      }}
    >
      Bad
    </button>
  </>
);

export default Controls;
