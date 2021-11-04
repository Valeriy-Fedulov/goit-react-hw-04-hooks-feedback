import React from 'react';

const Controls = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => (
  <>
    <h2>Please leave feedback</h2>
    <button
      type="button"
      onClick={() => {
        onGoodIncrement();
        console.log('Good');
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        onNeutralIncrement();
        console.log('Neutral');
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        onBadIncrement();
        console.log('Bad');
      }}
    >
      Bad
    </button>
  </>
);

export default Controls;
